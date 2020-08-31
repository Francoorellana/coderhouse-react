import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting } from "./components/Home";
import { Contador } from "./components/ItemCount"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>       
          <Route exact path="/home">
            <span className="inner-text">Home</span>
          </Route>
          <Route path="/productos">
            <span className="inner-text">Productos</span>
          </Route>
          <Route path="/carrito">
            <span className="inner-text">Carrito</span>
          </Route>
          <Route exact path="/contacto">
            <span className="inner-text">Contacto</span>
          </Route>
          <Greeting nombre="Bakery by Roo" />
      </Switch> 
      <Contador ini={0} min={0} max={5} producto="Torta Oreo" />
    </BrowserRouter>
  );
}

export default App;
