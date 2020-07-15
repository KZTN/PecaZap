import React from "react";

import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svgs/magnifying_glass_icon.svg";

import "./styles.scss";
export default function MailBoxHeader() {
  return (
    <section id="mailboxheader">
      <div className="left-content">
        <span>CAIXA DE ENTRADA</span>
      </div>
      <div className="right-content">
        <div className="box-search">
          <input type="text" />
          <MagnifyingGlassIcon style={{ fill: "#dddddd" }} />
        </div>
        <button>NOVO EMAIL</button>
      </div>
    </section>
  );
}
