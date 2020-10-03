import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Greeting } from "./components/Home";
import api from "./components/api";
import { Items } from './components/Items';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/cartContext';

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
          <CartProvider>
          <Route path='/productos/:id'>
            <ItemDetailContainer item={api} />
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
          </CartProvider>          
      </Switch>
    </BrowserRouter>
  );
}

export default App;
