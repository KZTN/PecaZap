import React from "react";

import Me from "../../components/Me";
import CardCustomer from "../../components/CardCustomer";

import { useSelector } from "react-redux";
import { Customer } from "../../store/modules/Customers/types";
import { Chat } from "../../store/modules/Chats/types";

import plusIcon from "../../assets/svgs/plus_icon.svg";
import { ReactComponent as MagnifyingGlassIcon } from "../../assets/svgs/magnifying_glass_icon.svg";
import asideLogo from "../../assets/svgs/aside_logo.svg";
import "./styles.scss";

export default function SideBar() {
  const unseenChats: Chat[] = useSelector(
    (state: any) => state.Chats.unseenChats
  );
  const customers = useSelector((state: any) => state.Customers.customers);
  const user = useSelector((state: any) => state.User);

  return (
    <aside>
      <Me name={user.name} company={user.company} photo={user.photo} />
      <div className="customers-actions">
        <div className="box-search">
          <input type="text" />
          <MagnifyingGlassIcon style={{ fill: "#ffffff" }} />
        </div>
        <div className="action-add-customer">
          <span>CLIENTES</span>
          <img src={plusIcon} alt="adicionar" />
        </div>
      </div>
      {customers.map((customer: Customer) => (
        <CardCustomer
          key={customer.id}
          id={customer.id}
          name={customer.name}
          company={customer.company}
          photo={customer.photo}
          notifications={
            unseenChats.filter((chat: Chat) => chat.customer === customer.id)
              .length
          }
        />
      ))}

      <footer>
        <img src={asideLogo} alt="logo" />
      </footer>
    </aside>
  );
}
