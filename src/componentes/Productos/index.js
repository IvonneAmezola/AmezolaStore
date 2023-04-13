import React from "react";
import IMG from "../../images/conicas.jpeg";
import IMG2 from "../../images/juegopatonas.jpeg";
import IMG3 from "../../images/individual.jpeg";
import IMG4 from "../../images/juegobala.jpeg";
import IMG5 from "../../images/juegocilindro.jpeg";
import IMG6 from "../../images/parbalita.jpeg";

export const ProductosLista = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Par de macetas conicas </h1>
                        <p> Macetas conicas de barro con base de madera de pino en color nogal </p>
                        <p className="price">$950</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG2} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Par de macetas patonas </h1>
                        <p> Macetas cilindricas de barro con base de madera de pino en color nogal</p>
                        <p className="price">$1100</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG3} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Maceta individual chica </h1>
                        <p> Maceta cilindro mini con base de madera de pino en color nogal </p>
                        <p className="price">$140</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG4} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Juego de 3 macetas bala </h1>
                        <p> Macetas bala de barro con base de madera en 3 tamaños diferentes </p>
                        <p className="price">$850</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG5} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Juego de 3 macetas cilindricas </h1>
                        <p> Macetas cilindro de barro con base de madera en 3 tamaños diferentes </p>
                        <p className="price">$950</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={IMG6} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Par de macetas bala </h1>
                        <p> Macetas bala chica de barro con base de madera de pino en color nogal </p>
                        <p className="price">$350</p>
                    </div>
                    <div className="buttom">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn"> Vista
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}