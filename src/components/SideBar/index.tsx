import React from "react";

import Me from "../../components/Me";
import Customer from "../../components/Customer";

import plusIcon from "../../assets/svgs/plus_icon.svg";
import magnifyingGlassIcon from "../../assets/svgs/magnifying_glass_icon.svg";
import asideLogo from "../../assets/svgs/aside_logo.svg";
import "./styles.scss";

export default function SideBar() {
  return (
    <aside>
      <Me />
      <div className="box-search">
        <input type="text" />
        <img src={magnifyingGlassIcon} alt="searchicon" />
      </div>
      <div className="customers-actions">
        <span>CLIENTES</span>
        <img src={plusIcon} alt="adicionar" />
      </div>
      <Customer />
      <Customer />
      <Customer />
      <Customer />
      <footer>
        <img src={asideLogo} alt="logo" />
      </footer>
    </aside>
  );
}
