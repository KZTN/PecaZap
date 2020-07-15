import React from "react";

import DialogHeader from "../DialogHeader";
import DialogContent from "../DialogContent";
import DialogCompose from "../DialogCompose";

import "./styles.scss";

export default function Dialog() {
  return (
    <section id="dialog">
      <DialogHeader />
      <DialogContent />
      <DialogCompose />
    </section>
  );
}
