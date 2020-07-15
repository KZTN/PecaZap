import React from "react";

import ArrowLeftIcon from "../../assets/svgs/arrow_left_icon.svg";
import "./styles.scss";
export default function MailBoxHeader() {
  return (
    <section id="mailheader">
      <div className="left-content">
        <button>
          <img src={ArrowLeftIcon} alt="voltar" />
        </button>
        <span>Procedimento de Troca</span>
      </div>
      <div className="right-content">
        <button>Finalizar Atendimento</button>
      </div>
    </section>
  );
}
