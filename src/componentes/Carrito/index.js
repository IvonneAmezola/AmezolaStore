import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/Dataprovider";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useAuth0 } from "@auth0/auth0-react";

export const Carrito = () => {
  const { isAuthenticated } = useAuth0();
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const tooglefalse = () => {
    setMenu(false);
    setShow(false);
    setOrderID("");
    setSuccess(false);
  };

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrito([...carrito]);
    });
  };
  const increase = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const removeProducto = (id) => {
    if (
      window.confirm(
        "¿Esta seguro de que desea eliminar el producto de su Carrito?"
      )
    ) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
    }
  };

  const createOrder = (data, actions) => {
    console.log(carrito);
    if (carrito) {
      const items = [];
      carrito.forEach((element) => {
        const { title, cantidad, price, id } = element;
        const item = {
          name: title,
          description: title,
          sku: id,
          unit_amount: {
            currency_code: "MXN",
            value: price,
          },
          quantity: cantidad,
        };

        console.log(items);
        items.push(item);
      });
      return actions.order
        .create({
          purchase_units: [
            {
              description: `Compra en AmezolaStore`,
              soft_descriptor: "Compra en AmezolaStore",
              amount: {
                currency_code: "MXN",
                value: total,
                breakdown: {
                  item_total: {
                    currency_code: "MXN",
                    value: total,
                  },
                },
              },
              items,
            },
          ],
        })
        .then((orderID) => {
          setOrderID(orderID);
          return orderID;
        });
    }
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(details);
      setSuccess(true);
    });
  };

  useEffect(() => {
    if (success) {
      alert(`Payment successful!! ${orderID}`);
      setCarrito([]);
      tooglefalse();
    }
  }, [success]);

  useEffect(() => {
    setShow(false);
  }, [carrito]);

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";
  const initialOptions = {
    "client-id": "test",
    currency: "MXN",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <section className={show1}>
        <div className={show2}>
          <div className="carrito__close" onClick={tooglefalse}>
            <box-icon name="x"></box-icon>
          </div>
          <h2>Su Carrito de Compras</h2>
          <div className="carrito__center">
            <br></br>
            {carrito.length === 0 ? (
              <h2>Carrito Vacío</h2>
            ) : (
              <>
                {carrito.map((producto) => (
                  <div className="carrito__item" key={producto.id}>
                    <div>
                      <img src={producto.image} alt={producto.title} />
                    </div>
                    <div class="carrito__contenedor">
                      <h3>{producto.title}</h3>
                      <br></br>
                      <p className="price">${producto.price}</p>
                    </div>
                    <div class="carrito__contenedor">
                      <br></br>
                      <box-icon
                        onClick={() => increase(producto.id)}
                        name="up-arrow"
                        type="solid"
                      />
                      <p className="cantidad">{producto.cantidad}</p>
                      <box-icon
                        onClick={() => reduce(producto.id)}
                        name="down-arrow"
                        type="solid"
                      />
                    </div>
                    <div
                      onClick={() => removeProducto(producto.id)}
                      className="remove__item"
                    >
                      <br></br>
                      <br></br>
                      <box-icon name="trash" />
                    </div>
                  </div>
                ))}
                ;
              </>
            )}
          </div>
          <div className="carrito_footer">
            <center>
              <br></br>
              <h3>Total: ${total}</h3>
              <br></br>

              {show ? (
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={onApprove}
                />
              ) : carrito && carrito.length > 0 && isAuthenticated ? (
                <button type="submit" onClick={() => setShow(true)}>
                  Continuar con la compra
                </button>
              ) : null}
              <div id="checkout-button-container"></div>
              <p>
                Recuerda que todos los pedidos tienen un tiempo de producción de
                30 Dias hábiles
              </p>
            </center>
          </div>
        </div>
      </section>
    </PayPalScriptProvider>
  );
};
