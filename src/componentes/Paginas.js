import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductosLista } from "./Productos/index";
import { Inicio } from "./Inicio";
import { ProductosDetalles } from "./Productos/ProductosDetalles";
import { LoginButton } from "./Login/LoginButton";

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact element={<Inicio />} />
        <Route path="/productos" exact element={<ProductosLista />} />
        <Route path="/Login" exact element={<LoginButton />} />
        <Route path="/producto/:id" exact element={<ProductosDetalles/>} />
      </Routes>
    </section>
  );
};
