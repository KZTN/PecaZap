import React from "react";

import { useSelector } from "react-redux";

import PanelSideBar from "../PanelSideBar";
import Dialog from "../Dialog";
import Mail from "../Mail";
import MailBox from "../MailBox";
import PanelCustomerInfo from "../PanelCustomerInfo";

import "./styles.scss";

export default function Panel() {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );
  return (
    <section id="panel">
      <PanelSideBar />
      {customerIsSelected !== -1 ? <Dialog /> : ""}
      {/* <MailBox /> */}
      {/* <Mail /> */}
      <PanelCustomerInfo />
    </section>
  );
}
