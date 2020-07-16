import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CustomersSelectCustomer } from "../../store/modules/Customers/actions";
import { ContactSelectChannel } from "../../store/modules/Contacts/actions";

import "./styles.scss";
import Notification from "../Notification";

interface Props {
  id: number;
  name: string;
  company: string;
  photo: string;
  notifications: number;
}

const CardCustomer: FC<Props> = ({
  name,
  company,
  photo,
  id,
  notifications,
}: Props) => {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );
  const dispatch = useDispatch();
  function handleSelectUser(id: number) {
    dispatch(CustomersSelectCustomer(id));
    dispatch(ContactSelectChannel(-1));
  }

  return (
    <section
      id="cardcustomer"
      className={customerIsSelected === id ? "actived" : ""}
      onClick={() => handleSelectUser(id)}
    >
      <div className="thumbnail">
        <img src={photo} alt="profilepicture" />
      </div>

      <div className="info">
        <div className="name">
          <span>{name}</span>
        </div>
        <div className="company">
          <span>{company}</span>
        </div>
      </div>
      {notifications !== 0 ? (
        <Notification notifications={notifications} />
      ) : (
        ""
      )}
    </section>
  );
};

export default CardCustomer;
