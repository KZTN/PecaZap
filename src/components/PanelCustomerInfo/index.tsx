import React from "react";

import { useSelector } from "react-redux";
import {
  Customer,
  Contact,
  lastConversations,
} from "../../store/modules/Customers/types";

import { Type } from "../../store/modules/Contacts/types";

import pencilIcon from "../../assets/svgs/pencil_icon.svg";
import trashIcon from "../../assets/svgs/trash_icon.svg";

import LastConversations from "../LastConversation";
import ContactCustomer from "../ContactCustomer";

import "./styles.scss";

export default function PanelCustomerInfo() {
  const customerIsSelected = useSelector(
    (state: any) => state.Customers.customerSelected
  );

  const contacts: Type[] = useSelector((state: any) => state.Contacts);

  const [customerSelected]: Customer[] = useSelector(
    (state: any) => state.Customers.customers
  ).filter((e: Customer) => e.id === customerIsSelected);

  return (
    <section id="panelcustomerinfo">
      {customerIsSelected === -1 ? (
        ""
      ) : (
        <>
          <div className="customer">
            <div className="thumbnail">
              <img src={customerSelected.photo} alt="profilepicture" />
            </div>

            <div className="info">
              <div className="name">
                <span>{customerSelected.name}</span>
              </div>
              <div className="company">
                <span>{customerSelected.company}</span>
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
            {customerSelected.lastConversations.map(
              (conversation: lastConversations) => (
                <LastConversations
                  key={conversation.finishedAt}
                  finishedAt={conversation.finishedAt}
                  channel={conversation.channel}
                />
              )
            )}
          </div>
          <div className="observations">
            <header>Observações</header>
            <p>{customerSelected.observations}</p>
          </div>
          <div className="contacts">
            {customerSelected.contacts.map((contact: Contact) => (
              <ContactCustomer
                key={contact.value}
                type={contacts[contact.channel - 1].type}
                value={contact.value}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
