import React from "react";
import logotipo from "../../images/logotipo.jpeg";

export const Header = () => {
  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={logotipo} alt="logo" width="150" />
        </div>
      </a>
      <ul>
        <li>
          <a href="/">INICIO</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="productos">PRODUCTOS</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
