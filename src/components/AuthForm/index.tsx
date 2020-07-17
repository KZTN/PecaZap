import React, { FormEvent } from "react";

import { useHistory } from "react-router-dom";

import formHeaderLogin from "../../assets/svgs/form_header_login.svg";

import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow_right_icon.svg";

import userIcon from "../../assets/svgs/user_input_icon.svg";
import passwordIcon from "../../assets/svgs/password_input_icon.svg";

import "./styles.scss";
export default function AuthForm() {
  const history = useHistory();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    history.push("/dashboard");
  }

  return (
    <section id="authform">
      <header>
        <img src={formHeaderLogin} alt="logo" />
        <div className="icons-wrapper">
          <WhatsappIcon style={{ fill: "#dddddd" }} />
          <SkypeIcon style={{ fill: "#dddddd" }} />
          <MailIcon style={{ fill: "#dddddd" }} />
          <PhoneIcon style={{ fill: "#dddddd" }} />
          <WebchatIcon style={{ fill: "#dddddd" }} />
        </div>
      </header>
      <form onSubmit={handleSubmit}>
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
          <ArrowRight style={{ fill: "#ffffff" }} />
        </button>
      </form>
      <div className="subactions">
        <span>Esqueceu a senha?</span>
      </div>
    </section>
  );
}
