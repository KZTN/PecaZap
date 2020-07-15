import React from "react";

import attachIcon from "../../assets/svgs/attach_icon.svg";
import copyIcon from "../../assets/svgs/copy_icon.svg";
import micIcon from "../../assets/svgs/mic_icon.svg";
import sendIcon from "../../assets/svgs/send_icon.svg";

import "./styles.scss";

export default function DialogCompose() {
  return (
    <section id="dialogcompose">
      <div className="wrapper">
        <input type="text" placeholder="Digite sua mensagem..." />

        <div className="actions">
          <button>
            <img src={attachIcon} alt="attach" />
          </button>
          <button>
            <img src={copyIcon} alt="copy" />
          </button>
          <button>
            <img src={micIcon} alt="mic" />
          </button>
          <button>
            <img src={sendIcon} alt="send" />
          </button>
        </div>
      </div>
    </section>
  );
}
