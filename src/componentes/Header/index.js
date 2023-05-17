import React, { useContext, useEffect } from "react";
import logotipo from "../../images/logotipo.jpeg";
import { DataContext } from "../../context/Dataprovider";
import { LoginButton } from "../Login/LoginButton";
import { LogoutButton } from "../Login/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  const { user, isAuthenticated, isLoading } = useAuth0();

  const toogleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("wellcome " + user.name);
    }
  }, []);

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>
      <a href="/">
        <div className="logo">
          <img src={logotipo} alt="logo" width="300" />
        </div>
      </a>
      &nbsp;
      <ul>
        <li>
          <h3>
            <a href="/">INICIO</a>
          </h3>
        </li>
      </ul>
      &nbsp;
      <ul>
        <li>
          <h3>
            <a href="productos">PRODUCTOS</a>
          </h3>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
      &nbsp;
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length} </span>
      </div>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      &nbsp;
    </header>
  );
};
