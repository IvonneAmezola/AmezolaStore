import React from "react";
import {Switch, Route} from "react-router-dom";
import { ProductosLista } from "./Productos/index";
import { Inicio } from "./Inicio";

export const Paginas =() => {
    return (
        <section>
            <Switch>
            <Route path="/"exact component={Inicio}/>
            <Route path="/productos" exact component={ProductosLista}/>
            </Switch>
        </section>

    )
}