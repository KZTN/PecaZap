import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ChatsSelectMail } from "../../store/modules/Chats/actions";
import { Chat } from "../../store/modules/Chats/types";

import ArrowLeftIcon from "../../assets/svgs/arrow_left_icon.svg";
import "./styles.scss";
export default function MailBoxHeader() {
  const dispatch = useDispatch();

  const mailIsSelected = useSelector((state: any) => state.Chats.selectedMail);

  const [mailSelected]: Chat[] = useSelector(
    (state: any) => state.Chats.chats
  ).filter((mail: Chat) => mail.id === mailIsSelected);
  function handleClick() {
    dispatch(ChatsSelectMail(-1));
  }

  return (
    <section id="mailheader">
      <div className="left-content">
        <button onClick={() => handleClick()}>
          <img src={ArrowLeftIcon} alt="voltar" />
        </button>
        <span>{mailSelected.subject}</span>
      </div>
      <div className="right-content">
        <button>Finalizar Atendimento</button>
      </div>
    </section>
  );
}
