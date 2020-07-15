import React from "react";

import MailBoxHeader from "../MailBoxHeader";
import MailList from "../MailList";
import "./styles.scss";
export default function MailBox() {
  return (
    <section id="mailbox">
      <MailBoxHeader />
      <MailList />
    </section>
  );
}
