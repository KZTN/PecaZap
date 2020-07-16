import React, { FC } from "react";
import moment from "moment";

import { useSelector } from "react-redux";
import { Type } from "../../store/modules/Contacts/types";

import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";

import "./styles.scss";

interface Props {
  finishedAt: number;
  channel: number;
}

const LastConversation: FC<Props> = ({ finishedAt, channel }: Props) => {
  const contacts: Type[] = useSelector((state: any) => state.Contacts);
  const type = contacts[channel - 1].type;
  var lastConversation = moment.unix(finishedAt).format("DD/MM/YYYY");
  const diffDays = ((moment().unix() - finishedAt) / 86400).toFixed(0);
  return (
    <section id="lastconversations">
      <div className="conversation-item">
        {type === "whatsapp" ? (
          <WhatsappIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
        ) : type === "email" ? (
          <MailIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
        ) : type === "skype" ? (
          <SkypeIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
        ) : type === "telefone" ? (
          <PhoneIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
        ) : (
          <WebchatIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
        )}
        <span>{`${lastConversation} (${diffDays} dias atrás)`}</span>
      </div>
    </section>
  );
};

export default LastConversation;
