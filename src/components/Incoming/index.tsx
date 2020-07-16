import React, { FC } from "react";

import moment from "moment";

import { ReactComponent as SeenIcon } from "../../assets/svgs/seen_icon.svg";
import { ReactComponent as UnseenIcon } from "../../assets/svgs/unseen_icon.svg";

import "./styles.scss";

interface Props {
  body: string;
  seen: boolean;
  timestamp: number;
}

const Incoming: FC<Props> = ({ body, seen, timestamp }: Props) => {
  return (
    <section id="incoming">
      <header>
        <img src="https://ui-avatars.com/api/?name=Joao+Silva" alt="customer" />
        <strong>Daniel Furtado - </strong>
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
