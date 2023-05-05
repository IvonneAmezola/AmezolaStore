import React from "react";
import Portada from "../../images/inicio.jpg"
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <section className="inicio">
      <h1>Bienvenidos a Amezola Store</h1>
      <br></br>
      <br></br>
      <img src={Portada} alt="inicio" />
      <br></br>
      <br></br>
      <footer>
        <center>
          <h2> Para obtener más información sobre nuestros servicios sientase libre de ponerse en conctato con nosotros, en breve lo atenderemos.</h2>
          <h3> Teléfono de Contacto: +52 (33)10970375, Visita nuestra tienda física en Av. Tonaltecas #84 Interior 11 </h3>
          <br></br>
          <p>Nota: Recuerde que todos nuestros productos se elaboran de manera artesanal
            nuestros procesos son realizados a mano desde la produccion hasta el embalaje,
            por lo que el tiempo de manufactura y entrega puede variar
            entre al menos 15 hasta 30 dias como maximo.</p>
        </center>
      </footer>
    </section>
  );
};
