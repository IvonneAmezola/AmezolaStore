
import React, {useContext} from "react";
import logotipo from "../../images/logotipo.jpeg";
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;
  

  const toogleMenu = () =>{
    setMenu(!menu)
  }
    
  }



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
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{carrito.length} </span>
      </div>
    </header>
  );
};
