import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Chat } from "../../store/modules/Chats/types";
import { ContactSelectChannel } from "../../store/modules/Contacts/actions";
import {
  ChatsSelectMail,
  ChatsRemoveChatNotification,
} from "../../store/modules/Chats/actions";

import Notification from "../Notification";

import { ReactComponent as CalendarIcon } from "../../assets/svgs/calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";

import "./styles.scss";
export default function PanelSideBar() {
  const dispatch = useDispatch();

  const channelSelected = useSelector(
    (state: any) => state.Contacts.channelSelected
  );

  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );

  const unseenChats: Chat[] = useSelector(
    (state: any) => state.Chats.unseenChats
  ).filter((unseenChat: Chat) => unseenChat.customer === customerIsSelected);

  function handleClick(channelSelected: number) {
    dispatch(ContactSelectChannel(channelSelected));
    dispatch(ChatsRemoveChatNotification(channelSelected));
    dispatch(ChatsSelectMail(-1));
  }

  return (
    <section id="panelsidebar">
      {customerIsSelected === -1 ? (
        ""
      ) : (
        <ul>
          <li>
            <button>
              <CalendarIcon
                style={{ width: 24, height: 24, fill: "#00a7cf" }}
              />
            </button>
          </li>
          <li className={channelSelected === 1 ? "actived" : ""}>
            <button onClick={() => handleClick(1)}>
              <WhatsappIcon
                style={{ width: 24, height: 24, fill: "#25d366" }}
              />
            </button>
            <div className="notification-place">
              <Notification
                notifications={
                  unseenChats.filter(
                    (unseenChat: Chat) => unseenChat.channel === 1
                  ).length
                }
              />
            </div>
          </li>
          <li className={channelSelected === 2 ? "actived" : ""}>
            <button onClick={() => handleClick(2)}>
              <MailIcon style={{ width: 24, height: 24, fill: "#e33e1a" }} />
            </button>
            <div className="notification-place">
              <Notification
                notifications={
                  unseenChats.filter(
                    (unseenChat: Chat) => unseenChat.channel === 2
                  ).length
                }
              />
            </div>
          </li>
          <li className={channelSelected === 3 ? "actived" : ""}>
            <button onClick={() => handleClick(3)}>
              <SkypeIcon style={{ width: 24, height: 24, fill: "#00aff0" }} />
            </button>
            <div className="notification-place">
              <Notification
                notifications={
                  unseenChats.filter(
                    (unseenChat: Chat) => unseenChat.channel === 3
                  ).length
                }
              />
            </div>
          </li>
          <li className={channelSelected === 4 ? "actived" : ""}>
            <button onClick={() => handleClick(4)}>
              <PhoneIcon style={{ width: 24, height: 24, fill: "#6a4aea" }} />
            </button>
            <div className="notification-place">
              <Notification
                notifications={
                  unseenChats.filter(
                    (unseenChat: Chat) => unseenChat.channel === 4
                  ).length
                }
              />
            </div>
          </li>
          <li className={channelSelected === 5 ? "actived" : ""}>
            <button onClick={() => handleClick(5)}>
              <WebchatIcon style={{ width: 24, height: 24, fill: "	#e87c28" }} />
            </button>
            <div className="notification-place">
              <Notification
                notifications={
                  unseenChats.filter(
                    (unseenChat: Chat) => unseenChat.channel === 5
                  ).length
                }
              />
            </div>
          </li>
        </ul>
      )}
    </section>
  );
}
