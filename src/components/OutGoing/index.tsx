import React, { FC } from "react";

import moment from "moment";

import { useSelector } from "react-redux";

import { ReactComponent as SeenIcon } from "../../assets/svgs/seen_icon.svg";
import { ReactComponent as UnseenIcon } from "../../assets/svgs/unseen_icon.svg";

import "./styles.scss";

interface Props {
  body: string;
  seen: boolean;
  timestamp: number;
}

const Outgoing: FC<Props> = ({ body, seen, timestamp }: Props) => {
  const user = useSelector((state: any) => state.User);

  return (
    <section id="outgoing">
      <header>
        {seen ? (
          <SeenIcon style={{ width: 16, height: 16 }} />
        ) : (
          <UnseenIcon style={{ width: 16, height: 16 }} />
        )}
        <img src={user.photo} alt="customer" />
        <strong>{user.name} - </strong>
        <span>{moment.unix(timestamp).format("DD/MM/YYYY hh:mm")}</span>
      </header>
      <div className="content">
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Outgoing;
