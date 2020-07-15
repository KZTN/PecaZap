import React from "react";

import "./styles.scss";

export default function MailList() {
  return (
    <section id="maillist">
      <table>
        <thead>
          <tr>
            <th>ASSUNTO</th>
            <th>INÍCIO</th>
            <th>ÚLTIMA MENSAGEM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Suspensão Freelander 2</span>
            </td>
            <td>
              <span>01/10/2019</span>
            </td>
            <td>
              <span>22/10/2019</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>Procedimento de troca</span>
            </td>
            <td>
              <span>01/06/2019</span>
            </td>
            <td>
              <span>15/06/2019</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
