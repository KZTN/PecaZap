import React from "react";
import "./styles.scss";
import Notification from "../Notification";
export default function Customer() {
  return (
    <section id="customer">
      <div className="thumbnail">
        <img
          src="https://ui-avatars.com/api/?name=Joao+Silva"
          alt="profilepicture"
        />
      </div>

      <div className="info">
        <div className="name">
          <span>João da Silva</span>
        </div>
        <div className="company">
          <span>ACME INC</span>
        </div>
      </div>
      <Notification />
    </section>
  );
}
