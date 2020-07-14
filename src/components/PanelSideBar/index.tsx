import React from "react";

import { ReactComponent as CalendarIcon } from "../../assets/svgs/calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";

import "./styles.scss";
export default function PanelSideBar() {
  return (
    <section id="panelsidebar">
      <ul>
        <li>
          <CalendarIcon style={{ width: 24, height: 24, fill: "#00a7cf" }} />
        </li>
        <li>
          <WhatsappIcon style={{ width: 24, height: 24, fill: "#25d366" }} />
        </li>
        <li>
          <MailIcon style={{ width: 24, height: 24, fill: "#e33e1a" }} />
        </li>
        <li>
          <SkypeIcon style={{ width: 24, height: 24, fill: "#00aff0" }} />
        </li>
        <li>
          <PhoneIcon style={{ width: 24, height: 24, fill: "#6a4aea" }} />
        </li>
        <li>
          <WebchatIcon style={{ width: 24, height: 24, fill: "	#e87c28" }} />
        </li>
      </ul>
    </section>
  );
}
