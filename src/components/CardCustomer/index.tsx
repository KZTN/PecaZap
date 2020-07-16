import React, { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CustomersSelectCustomer } from "../../store/modules/Customers/actions";

import "./styles.scss";
import Notification from "../Notification";

interface Props {
  id: number;
  name: string;
  company: string;
  photo: string;
}

const CardCustomer: FC<Props> = ({ name, company, photo, id }: Props) => {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );
  const dispatch = useDispatch();
  function handleSelectUser(id: number) {
    dispatch(CustomersSelectCustomer(id));
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
      <Notification />
    </section>
  );
};

export default CardCustomer;
