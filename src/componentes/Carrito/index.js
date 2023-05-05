import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;


    const tooglefalse = () => {
        setMenu(false);
    };

    const reduce = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }
    const increase = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }


    const removeProducto = id => {
        if (window.confirm("¿Esta seguro de que desea eliminar el producto de su Carrito?")) {
            carrito.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    carrito.splice(index, 1)
                }
            })
            setCarrito([...carrito])
        }
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return (
        <section className={show1}>
            <div className={show2}>
                <div className="carrito__close" onClick={tooglefalse}>
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su Carrito de Compras</h2>
                <div className="carrito__center">
                    <br></br>
                    {
                        carrito.length === 0 ? <h2>Carrito Vacio</h2> : <>
                            {
                                carrito.map((producto) => (
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
                                            <box-icon onClick={() => increase(producto.id)} name="up-arrow"
                                                type="solid" />
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <box-icon onClick={() => reduce(producto.id)}
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
                                ))
                            };
                        </>
                    }
                </div>
                <div className="carrito_footer">
                    <center>
                        <br></br>
                        <h3>Total: ${total}</h3>
                        <br></br>
                        <button className="btn">Pagar</button>
                    </center>
                </div>
            </div>
        </section>


    );

}