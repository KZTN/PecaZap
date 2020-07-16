import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CustomersLoadRequest } from "../../store/modules/Customers/actions";
import { UserLoadRequest } from "../../store/modules/User/actions";
import { ChatsLoadRequest } from "../../store/modules/Chats/actions";
import { ContactLoadRequest } from "../../store/modules/Contacts/actions";

import Sidebar from "../../components/SideBar";
import Panel from "../../components/Panel";

import "./styles.scss";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CustomersLoadRequest());
    dispatch(UserLoadRequest());
    dispatch(ChatsLoadRequest());
    dispatch(ContactLoadRequest());
  }, [dispatch]);

  return (
    <section id="dashboard">
      <Sidebar />
      <Panel />
    </section>
  );
}
