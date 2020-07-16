import React, { FC } from "react";

import moment from "moment";

import { useSelector } from "react-redux";
import { Customer } from "../../store/modules/Customers/types";

import { ReactComponent as SeenIcon } from "../../assets/svgs/seen_icon.svg";
import { ReactComponent as UnseenIcon } from "../../assets/svgs/unseen_icon.svg";

import "./styles.scss";

interface Props {
  body: string;
  seen: boolean;
  timestamp: number;
}

const Incoming: FC<Props> = ({ body, seen, timestamp }: Props) => {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );

  const [customer]: Customer[] = useSelector(
    (state: any) => state.Customers.customers
  ).filter((customer: Customer) => customer.id === customerIsSelected);

  return (
    <section id="incoming">
      <header>
        <img src={customer.photo} alt="customer" />
        <strong>{customer.name} - </strong>
        <span>{moment.unix(timestamp).format("DD/MM/YYYY hh:mm")}</span>
        {seen ? (
          <SeenIcon style={{ width: 16, height: 16 }} />
        ) : (
          <UnseenIcon style={{ width: 16, height: 16 }} />
        )}
      </header>
      <div className="content">
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Incoming;
