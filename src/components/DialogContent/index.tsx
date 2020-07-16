import React from "react";

import { useSelector } from "react-redux";
import { Chat, Message } from "../../store/modules/Chats/types";
import Incoming from "../Incoming";
import OutGoing from "../OutGoing";

import "./styles.scss";
export default function DialogContent() {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );
  const channelSelected = useSelector(
    (state: any) => state.Contacts.channelSelected
  );
  const [content] = useSelector((state: any) => state.Chats.chats).filter(
    (chat: Chat) =>
      chat.customer === customerIsSelected && chat.channel === channelSelected
  );
  return (
    <section id="dialogcontent">
      {content
        ? content.messages.map((message: Message) => (
            <>
              {message.type === "incoming" ? (
                <div className="left-placed">
                  <Incoming
                    body={message.body}
                    seen={message.seen}
                    timestamp={message.timestamp}
                  />
                </div>
              ) : (
                <div className="right-placed">
                  <OutGoing
                    body={message.body}
                    seen={message.seen}
                    timestamp={message.timestamp}
                  />
                </div>
              )}
            </>
          ))
        : ""}
      <div className="blank-space" />
    </section>
  );
}
