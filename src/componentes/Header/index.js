
import React, {useContext} from "react";
import logotipo from "../../images/logotipo.jpeg";
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  console.log(carrito)

  const toogleMenu = () =>{
    setMenu(!menu)
  }
  
  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <a href="/">
        <div className="logo">
          <img src={logotipo} alt="logo" width="250" />
        </div>
      </a>
      <ul>
        <li>
          <h3><a href="/">INICIO</a></h3>
        </li>
      </ul>
      <ul>
        <li>
        <h3><a href="productos">PRODUCTOS</a></h3>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length} </span>
      </div>
      <div className="user" >
        <box-icon name="user"></box-icon>
      </div>
    </header>
  );
};
