import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting, Productos } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>       
          <Route exact path="/home">
            <Greeting nombre="Bakery by Ro" />
          </Route>
          <Route path="/productos">
            <Productos />            
          </Route>
          <Route path="/carrito">
            <span className="inner-text">Aun no agrego nada</span>
          </Route>
          <Route exact path="/contacto">
            <span className="inner-text">Contacto</span>
          </Route>         
      </Switch>
    </BrowserRouter>
  );
}

export default App;
