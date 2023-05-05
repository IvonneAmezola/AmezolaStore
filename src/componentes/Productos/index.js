import React, { useContext } from "react";

import { DataContext } from "../../context/Dataprovider";
import { ProductoItem } from "./ProductoItem";

export const ProductosLista = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  return (
    <>
      <h1 className="title">Productos</h1>
      <div className="productos">
        {productos &&
          productos.map((producto) => (
            <ProductoItem
              key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
            />
          ))}
      </div>
      <footer>
      <br></br>
        <center>
          <h2> Para obtener más información sobre nuestros servicios sientase libre de ponerse en contacto con nosotros, en breve lo atenderemos.</h2>
          <h3> Teléfono de Contacto: +52 (33)10970375, Visita nuestra tienda física en Av. Tonaltecas #84 Interior 11 </h3>
          <br></br>
          <p>Nota: Recuerde que todos nuestros productos se elaboran de manera artesanal
            nuestros procesos son realizados a mano desde la produccion hasta el embalaje,
            por lo que el tiempo de manufactura y entrega puede variar
            entre al menos 15 hasta 30 dias como maximo.</p>
        </center>
        <br></br>
      </footer>
    </>
  );
};
