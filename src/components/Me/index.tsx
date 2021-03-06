import React, { FC } from "react";

import chevronIcon from "../../assets/svgs/chevron_bottom_icon.svg";
import "./styles.scss";

interface Props {
  name: string;
  company: string;
  photo: string;
}

const Me: FC<Props> = ({ name, company, photo }: Props) => {
  return (
    <section id="me">
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
      <div className="actions">
        <img src={chevronIcon} alt="actions" />
      </div>
    </section>
  );
};

export default Me;
