import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../context/Dataprovider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl] = useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() => {
    console.log('re render', params.id)
    item = 0;
    productos.forEach(producto => {
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto)
        setUrl(0)
      }
    })
  }, [params.id, productos])

  console.log(url)

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values)
  }, [url, params.id])

  const handleInput = (e) => {
    const number = e.target.value.toString().padStart(2, '01')
    setUrl(number)
  }

  if (detalle.length < 1) return null;

  return (
    <>
      {
        <div className="detalles">
          <center>
          <h2>{detalle.title}</h2>
          <hr class="detalles__division"></hr>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <div className="grid">
            <p className="nuevo">Producto Nuevo</p>
          </div>
          {
            <div class="detalles__producto__img">
              <center>
                <img src={detalle.image} alt={detalle.title} />
              </center>
            </div>
          }
          <center>
            <br></br>
            <p className="price">${detalle.price}</p>
            <br></br>
            <button class="btn" onClick={() => addCarrito(detalle.id)}>
              Añadir al carrito
            </button>
            <br></br>
          </center>
          <br></br>
          <div className="description">
            <p><b>Descripción del Producto: </b>Maceta hecha de material de barro, puede servir para planta natural o artificial. Además cuenta con base de madera de pino en acabado color nogal.</p>
            <br />
            <p></p>
          </div>
        </div>
      }

      <h2 className="relacionados">Productos Relacionados</h2>
      <div className="productos">
        {
          productos.map((producto) => {
            if ((item < 6) && (detalle.category === producto.category)) {
              item++;
              return <ProductoItem
                key={producto.id}
                title={producto.title}
                image={producto.image}
                category={producto.category}
                price={producto.price}
                id={producto.id}
              />
            }


          })
        }

      </div>
    </>
  )
}
