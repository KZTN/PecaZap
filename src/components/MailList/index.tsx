import React from "react";

import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { Chat } from "../../store/modules/Chats/types";
import {
  ChatsSelectMail,
  ChatsRemoveChatNotification,
} from "../../store/modules/Chats/actions";

import Notification from "../Notification";

import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow_right_icon.svg";

import "./styles.scss";

export default function MailList() {
  const dispatch = useDispatch();

  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );

  const listMails = useSelector((state: any) => state.Chats.chats).filter(
    (chat: Chat) => chat.channel === 2 && chat.customer === customerIsSelected
  );

  const listUnseenMails: Chat[] = useSelector(
    (state: any) => state.Chats.unseenChats
  ).filter(
    (chat: Chat) => chat.channel === 2 && chat.customer === customerIsSelected
  );

  function handleClick(id: number) {
    dispatch(ChatsSelectMail(id));
    dispatch(ChatsRemoveChatNotification(id, customerIsSelected));
  }
  function checkIsSpecial(id: number) {
    const [lastUnseen]: Chat[] = listUnseenMails.filter(
      (chat: Chat) => chat.id === id
    );
    if (lastUnseen) {
      if (lastUnseen.lastSeen) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <section id="maillist">
      <table>
        <thead>
          <tr>
            <th>ASSUNTO</th>
            <th>INÍCIO</th>
            <th>ÚLTIMA MENSAGEM</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listMails.map((mail: Chat) => (
            <>
              <tr
                key={mail.id}
                onClick={() => handleClick(mail.id)}
                className={checkIsSpecial(mail.id) === false ? "special" : ""}
              >
                <td className={"special-left-td"}>
                  <span>{mail.subject}</span>
                </td>
                <td>
                  <span>{moment.unix(mail.start).format("DD/MM/YYYY")}</span>
                </td>
                <td>
                  <span>
                    {moment
                      .unix(mail.messages[mail.messages.length - 1].timestamp)
                      .format("DD/MM/YYYY")}
                  </span>
                </td>
                <td className={"special-right-td"}>
                  <div className="notification">
                    {checkIsSpecial(mail.id) === false ? (
                      <>
                        <Notification notifications={1} />
                        <ArrowRight style={{ fill: "#A7B6C2" }} />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
              <div className="blank-space"></div>
            </>
          ))}
        </tbody>
      </table>
    </section>
  );
}
