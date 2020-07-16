import React from "react";

import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { Chat } from "../../store/modules/Chats/types";
import { ChatsSelectMail } from "../../store/modules/Chats/actions";

import Notification from "../Notification";

import "./styles.scss";

export default function MailList() {
  const dispatch = useDispatch();

  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );

  const listMails = useSelector((state: any) => state.Chats.chats).filter(
    (chat: Chat) => chat.channel === 2 && chat.customer === customerIsSelected
  );

  function handleClick(id: number) {
    dispatch(ChatsSelectMail(id));
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
            <tr key={mail.id} onClick={() => handleClick(mail.id)}>
              <td>
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
              <td>
                {mail.messages[mail.messages.length - 1].seen === false ? (
                  <Notification notifications={1} />
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
