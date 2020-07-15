import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CustomerLoadRequest } from "../../store/modules/Customers/actions";
import { UserLoadRequest } from "../../store/modules/User/actions";

import Sidebar from "../../components/SideBar";
import Panel from "../../components/Panel";

import "./styles.scss";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CustomerLoadRequest());
    dispatch(UserLoadRequest());
  }, [dispatch]);

  return (
    <section id="dashboard">
      <Sidebar />
      <Panel />
    </section>
  );
}
