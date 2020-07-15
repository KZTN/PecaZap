import React from "react";

import Me from "../../components/Me";
import CardCustomer from "../../components/CardCustomer";

import { useSelector } from "react-redux";
import { Customer } from "../../store/modules/Customers/types";
import { UserState } from "../../store/modules/User/types";

import plusIcon from "../../assets/svgs/plus_icon.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svgs/magnifying_glass_icon.svg";
import asideLogo from "../../assets/svgs/aside_logo.svg";
import "./styles.scss";

export default function SideBar() {
  const customers = useSelector((state: any) => state.Customers.customers);
  const user = useSelector((state: any) => state.User);
  console.log(user);
  return (
    <aside>
      <Me name={user.name} company={user.company} photo={user.photo} />
      <div className="box-search">
        <input type="text" />
        <MagnifyingGlassIcon style={{ fill: "#ffffff" }} />
      </div>
      <div className="customers-actions">
        <span>CLIENTES</span>
        <img src={plusIcon} alt="adicionar" />
      </div>
      {customers.map((customer: Customer) => (
        <CardCustomer
          key={customer.id}
          name={customer.name}
          company={customer.company}
          photo={customer.photo}
        />
      ))}

      <footer>
        <img src={asideLogo} alt="logo" />
      </footer>
    </aside>
  );
}
