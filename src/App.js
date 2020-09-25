import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting } from "./components/Home";
import api from "./components/api";
import ItemDetail from './components/ItemDetail';
import { Items } from './components/Items';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch> 
       
          <Route exact path="/" >            
            <Greeting nombre="Bakery by Ro" />
          </Route>
          <Route exact path="/home" >            
            <Greeting nombre="Bakery by Ro" />
          </Route>
          <Route path='/productos/:id'>
            <ItemDetail data={api} />
          </Route>      
          <Route exact path="/productos">
            <Items data={api} />        
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
