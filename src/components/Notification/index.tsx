import React, { FC } from "react";

import "./styles.scss";

interface Props {
  notifications: number;
}

const Notification: FC<Props> = ({ notifications }: Props) => {
  return (
    <>
      {notifications !== 0 ? (
        <section id="notification">
          <span>{notifications}</span>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Notification;
