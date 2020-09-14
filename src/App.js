import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting, Productos } from "./components/Home";
import { Contador } from "./components/ItemCount";

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
            <Contador ini={0} min={0} max={5} producto="Torta Oreo" />
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
