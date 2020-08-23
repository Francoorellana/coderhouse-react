import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting } from "./components/Home"


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
          <Greeting nombre="Juan" apellido="Jouglard" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
