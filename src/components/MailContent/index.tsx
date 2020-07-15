import React from "react";

import Incoming from "../Incoming";
import OutGoing from "../OutGoing";

import "./styles.scss";
export default function MailContent() {
  return (
    <section id="mailcontent">
      <Incoming />
      <OutGoing />
      <OutGoing />
      <OutGoing />
      <OutGoing />
      <div className="blank-space" />
    </section>
  );
}
