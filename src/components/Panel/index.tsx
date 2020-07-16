import React from "react";

import { useSelector } from "react-redux";

import PanelSideBar from "../PanelSideBar";
import Dialog from "../Dialog";
import MailBox from "../MailBox";
import PanelCustomerInfo from "../PanelCustomerInfo";

import "./styles.scss";

export default function Panel() {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );
  const channelSelected = useSelector(
    (state: any) => state.Contacts.channelSelected
  );
  return (
    <section id="panel">
      <PanelSideBar />
      {customerIsSelected !== -1 ? (
        channelSelected === 1 ? (
          <Dialog />
        ) : channelSelected === 2 ? (
          <MailBox />
        ) : (
          ""
        )
      ) : (
        ""
      )}
      <PanelCustomerInfo />
    </section>
  );
}
