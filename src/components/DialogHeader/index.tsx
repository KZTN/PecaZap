import React from "react";

import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svgs/magnifying_glass_icon.svg";

import "./styles.scss";

export default function DialogHeader() {
  return (
    <section id="dialogheader">
      <div className="box-search">
        <input type="text" />
        <MagnifyingGlassIcon style={{ fill: "#dddddd" }} />
      </div>
      <button>FINALIZAR PEDIDO</button>
    </section>
  );
}
