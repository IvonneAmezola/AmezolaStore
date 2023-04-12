import React from "react";
import IMG from "../../images/conicas.jpeg";

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
                        <h1>Title </h1>
                        <p> Categoria </p>
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
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Title </h1>
                        <p> Categoria </p>
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
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Title </h1>
                        <p> Categoria </p>
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
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Title </h1>
                        <p> Categoria </p>
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
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>Title </h1>
                        <p> Categoria </p>
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
            </div>
        </>
    )
}