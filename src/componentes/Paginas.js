import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductosLista } from "./Productos/index";
import { Inicio } from "./Inicio";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/productos" exact element={<ProductosLista />} />
      </Routes>
    </section>
  );
};
