import React, { FC } from "react";
import "./styles.scss";
import Notification from "../Notification";

interface Props {
  name: string;
  company: string;
  photo: string;
}

const CardCustomer: FC<Props> = ({ name, company, photo }: Props) => {
  return (
    <section id="cardcustomer">
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
