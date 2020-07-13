import React from "react";

import formHeaderLogin from "../../assets/svgs/form_header_login.svg";
import phoneIcon from "../../assets/svgs/phone_icon.svg";
import skypeIcon from "../../assets/svgs/skype_icon.svg";
import whatsappIcon from "../../assets/svgs/whatsapp_icon.svg";
import webchatIcon from "../../assets/svgs/webchat_icon.svg";
import mailIcon from "../../assets/svgs/mail_icon.svg";
import arrowRight from "../../assets/svgs/arrow_right_icon.svg";
import userIcon from "../../assets/svgs/user_input_icon.svg";
import passwordIcon from "../../assets/svgs/password_input_icon.svg";

import "./styles.scss";
export default function AuthForm() {
  return (
    <section id="authform">
      <header>
        <img src={formHeaderLogin} alt="logo" />
        <div className="icons-wrapper">
          <img src={whatsappIcon} alt="whatsappicon" />
          <img src={skypeIcon} alt="skypeicon" />
          <img src={mailIcon} alt="mailicon" />
          <img src={phoneIcon} alt="phoneicon" />
          <img src={webchatIcon} alt="webchaticon" />
        </div>
      </header>
      <form action="">
        <div className="box-input">
          <img src={userIcon} alt="usericon" />
          <input type="text" placeholder="Usuário" required />
        </div>
        <div className="box-input">
          <img src={passwordIcon} alt="passwordicon" />

          <input type="password" placeholder="Senha" required />
        </div>
        <button type="submit">
          <span>Entrar</span>
          <img src={arrowRight} alt="arrowicon" />
        </button>
      </form>
      <div className="subactions">
        <span>Esqueceu a senha?</span>
      </div>
    </section>
  );
}
