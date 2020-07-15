import React from "react";

import { ReactComponent as SeenIcon } from "../../assets/svgs/seen_icon.svg";

import "./styles.scss";

export default function Incoming() {
  return (
    <section id="incoming">
      <header>
        <img src="https://ui-avatars.com/api/?name=Joao+Silva" alt="customer" />
        <strong>Daniel Furtado - </strong>
        <span>07/10/2019 14h10</span>
        <SeenIcon style={{ width: 16, height: 16 }} />
      </header>
      <div className="content">
        <p>
          Quisque enim purus, hendrerit et volutpat viverra, faucibus non neque.
          Suspendisse quis arcu lacus. Sed tincidunt dui at leo laoreet, vel
          suscipit mauris dignissim. Phasellus ullamcorper orci ac lorem
          ultrices, ac fringilla nisi bibendum. Integer quis aliquam massa,
          vitae condimentum lorem. Suspendisse scelerisque cursus nisl non
          pulvinar. Donec at varius nulla. Praesent volutpat, nibh ac volutpat
          pharetra, sapien sapien scelerisque sapien, id vehicula nibh elit in
          velit.
        </p>
      </div>
    </section>
  );
}
