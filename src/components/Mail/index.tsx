import React from "react";

import MailHeader from "../MailHeader";
import MailCompose from "../MailCompose";
import MailContent from "../MailContent";
import "./styles.scss";

export default function Mail() {
  return (
    <section id="mail">
      <MailHeader />
      <MailContent />
      <MailCompose />
    </section>
  );
}
