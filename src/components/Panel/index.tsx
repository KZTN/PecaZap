import React from "react";

import PanelSideBar from "../PanelSideBar";
import Dialog from "../Dialog";
import Mail from "../Mail";
import MailBox from "../MailBox";
import PanelCustomerInfo from "../PanelCustomerInfo";

import "./styles.scss";

export default function Panel() {
  return (
    <section id="panel">
      <PanelSideBar />
      <Dialog />
      {/* <MailBox /> */}
      {/* <Mail /> */}
      <PanelCustomerInfo />
    </section>
  );
}
