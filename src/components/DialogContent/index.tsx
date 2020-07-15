import React from "react";

import Incoming from "../Incoming";
import OutGoing from "../OutGoing";

import "./styles.scss";
export default function DialogContent() {
  return (
    <section id="dialogcontent">
      <div className="left-placed">
        <Incoming />
      </div>
      <div className="right-placed">
        <OutGoing />
      </div>
      <div className="blank-space" />
    </section>
  );
}
