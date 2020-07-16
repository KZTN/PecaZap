import React, { FC } from "react";

import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";

import "./styles.scss";

interface Props {
  type: string;
  value: string;
}

const CardCustomer: FC<Props> = ({ type, value }: Props) => {
  return (
    <section id="contactcustomer">
      <div className="contact-item">
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

        <div className="content">
          <header>{type}</header>
          <span>{value}</span>
        </div>
      </div>
    </section>
  );
};

export default CardCustomer;
