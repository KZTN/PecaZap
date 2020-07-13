import React from "react";
import AuthForm from "../../components/AuthForm";
import bigChat from "../../assets/svgs/big_chat.svg";
import "./styles.scss";
export default function Login() {
  return (
    <section id="login">
      <div className="left-content">
        <AuthForm />
      </div>
      <div className="right-content">
        <img src={bigChat} alt="background" />
      </div>
    </section>
  );
}
