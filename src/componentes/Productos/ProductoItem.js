import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";


export const ProductoItem = ({
  id,
  title,
  price,
  image,
  category
}) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;


  return (

    <section key={id} className="producto">
      <br></br>
      <Link to={'/producto/${id}'}>
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <br></br>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al Carrito</button>
      <br></br> 
      </div>
      <br></br>
    </section>
  );
};
