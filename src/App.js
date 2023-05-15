import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import { Usuario } from "./componentes/Usuario"


function App() {
  
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
