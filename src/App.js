import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import { Profile } from "./Profile";
import { LoginButton } from "./login";
import { LogoutButton } from "./Logout";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
            {isAuthenticated ? (
             <>
              <Profile/>
              <LogoutButton/>
              </>
            ) : (
            <LoginButton/>
            )}
          <Carrito />
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
