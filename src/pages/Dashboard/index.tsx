import React from "react";

import Sidebar from "../../components/SideBar";
import Panel from "../../components/Panel";

import "./styles.scss";
export default function Dashboard() {
  return (
    <section id="dashboard">
      <Sidebar />
      <Panel />
    </section>
  );
}
