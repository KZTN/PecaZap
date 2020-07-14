import React from "react";

import chevronIcon from "../../assets/svgs/chevron_bottom_icon.svg";
import "./styles.scss";
export default function Me() {
  return (
    <section id="me">
      <div className="thumbnail">
        <img
          src="https://ui-avatars.com/api/?name=Carlos+Correa"
          alt="profilepicture"
        />
      </div>

      <div className="info">
        <div className="name">
          <span>Carlos Corrêa</span>
        </div>
        <div className="company">
          <span>PREMIUM PEÇAS</span>
        </div>
      </div>
      <div className="actions">
        <img src={chevronIcon} alt="actions" />
      </div>
    </section>
  );
}
