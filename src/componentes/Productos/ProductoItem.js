import React from "react";
/*import IMG from "../../images/conicas.jpeg";
import IMG2 from "../../images/juegopatonas.jpeg";
import IMG3 from "../../images/individual.jpeg";
import IMG4 from "../../images/juegobala.jpeg";
import IMG5 from "../../images/juegocilindro.jpeg";
import IMG6 from "../../images/parbalita.jpeg";*/

export const ProductoItem = ({
    id, 
    title, 
    price, 
    image, 
    category
}) => {

    console.log(image)
    
    return (
        <><div className="producto">
            <a href="#">
                <div className="producto__img">
                    <img src={image.default} alt={title} />
                </div>
            </a>
            <div className="producto__footer">
                <h1> {title} </h1>
                <p> {category} </p>
                <p className="price">${price}</p>
            </div>
            <div className="buttom">
                <button className="btn">
                    Añadir al carrito
                </button>
                <div>
                    <a href="#" className="btn"> 
                        Vista
                    </a>
                </div>
            </div>
        </div></>
    )
}