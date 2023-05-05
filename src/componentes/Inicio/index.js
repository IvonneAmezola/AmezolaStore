import React from "react";
import Portada from "../../images/inicio.jpg"
import { Link} from "react-router-dom";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to= "/">
        <h1>Inicio</h1>
      </Link>
      <Link to= "/productos">
        <h1>Productos</h1>
      </Link>
      <img src={Portada} alt="inicio"/>
        <h1>Amezola Store </h1>
        <h2> Telefono de contacto +52 3310970375 </h2>
        <p>Nota: Los productos se hacen de manera artesanal, 
          por lo que el tiempo de manufactura puede tardar 
          entre 15 hasta 30 dias.</p>

    </div>
  
  );
};
