import React from "react";

import { ReactComponent as PhoneIcon } from "../../assets/svgs/phone_icon.svg";
import { ReactComponent as SkypeIcon } from "../../assets/svgs/skype_icon.svg";
import { ReactComponent as WhatsappIcon } from "../../assets/svgs/whatsapp_icon.svg";
import { ReactComponent as WebchatIcon } from "../../assets/svgs/webchat_icon.svg";
import { ReactComponent as MailIcon } from "../../assets/svgs/mail_icon.svg";

import pencilIcon from "../../assets/svgs/pencil_icon.svg";
import trashIcon from "../../assets/svgs/trash_icon.svg";

import "./styles.scss";

export default function PanelCustomerInfo() {
  return (
    <section id="panelcustomerinfo">
      <div className="customer">
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
      </div>
      <div className="actions">
        <button>
          <img src={pencilIcon} alt="pen" />
        </button>
        <button>
          <img src={trashIcon} alt="trash" />
        </button>
      </div>
      <div className="conversation-history">
        <header>Últimas conversas</header>
        <div className="conversation-item">
          <WhatsappIcon style={{ width: 16, height: 16, fill: "#A7B6C2" }} />
          <span>25/09/2019 (10 dias atrás)</span>
        </div>
        <div className="conversation-item">
          <WhatsappIcon style={{ width: 16, height: 16, fill: "#A7B6C2" }} />
          <span>15/09/2019 (20 dias atrás)</span>
        </div>
        <div className="conversation-item">
          <SkypeIcon style={{ width: 16, height: 16, fill: "#A7B6C2" }} />
          <span>15/06/2019 (100 dias atrás)</span>
        </div>
      </div>
      <div className="observations">
        <header>Observações</header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lacus,
          et potenti nisl viverra a, feugiat. Eget ultrices elit faucibus arcu
          volutpat vulputate.
        </p>
      </div>
      <div className="contacts">
        <div className="contact-item">
          <WhatsappIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
          <div className="content">
            <header>Whatsapp</header>
            <span>55 (19) 1234-5678</span>
          </div>
        </div>
        <div className="contact-item">
          <MailIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
          <div className="content">
            <header>EMail</header>
            <span>joao@silva.com.br</span>
          </div>
        </div>
        <div className="contact-item">
          <SkypeIcon style={{ width: 24, height: 24, fill: "#A7B6C2" }} />
          <div className="content">
            <header>Skype</header>
            <span>@joao_silva</span>
          </div>
        </div>
      </div>
    </section>
  );
}
