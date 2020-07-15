import React from "react";

import attachIcon from "../../assets/svgs/attach_icon.svg";
import clipIcon from "../../assets/svgs/clip_icon.svg";
import boldIcon from "../../assets/svgs/bold_icon.svg";
import italicIcon from "../../assets/svgs/italic_icon.svg";
import underlineIcon from "../../assets/svgs/underline_icon.svg";
import TextleftIcon from "../../assets/svgs/text_left_icon.svg";
import TextcentertIcon from "../../assets/svgs/text_center_icon.svg";
import TextrighttIcon from "../../assets/svgs/text_right_icon.svg";
import TextjustifytIcon from "../../assets/svgs/text_justify_icon.svg";

import "./styles.scss";

export default function MailCompose() {
  return (
    <section id="mailcompose">
      <form action="">
        <textarea placeholder="Digite sua mensagem..." />

        <div className="actions">
          <button type="submit">RESPONDER</button>
          <div className="actions-section">
            <button>
              <img src={attachIcon} alt="attach" />
            </button>
            <button>
              <img src={clipIcon} alt="clip" />
            </button>
          </div>
          <div className="actions-section">
            <button>
              <img src={boldIcon} alt="mic" />
            </button>
            <button>
              <img src={italicIcon} alt="send" />
            </button>
            <button>
              <img src={underlineIcon} alt="send" />
            </button>
            <button>
              <img src={TextleftIcon} alt="send" />
            </button>
            <button>
              <img src={TextcentertIcon} alt="send" />
            </button>
            <button>
              <img src={TextrighttIcon} alt="send" />
            </button>
            <button>
              <img src={TextjustifytIcon} alt="send" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
