import React, { useState } from "react";
import { ItemList } from "./ItemList";

function obtenerProductos() {                                                                                          
  return new Promise((resolve, reject) => {                            
      setTimeout(() => {                                                 
        resolve([
          { id: "01", name: "Torta Brownie", description: "Bizcocho de chocolate con manteca, nueces, relleno de dulce de leche", stock: 5 },
          { id: "02", name: "Budin de Naranja", description: "Bizcocho con sabor a naranja y chips de chocolate", stock: 5 },
          { id: "03", name: "Chipa x 6", description: "Seis chipá rellenos de queso", stock: 6 },
        ]);                                                              
      }, 2000);                                                          
    });                                                                  
 }   

export function Items() {
   const [productos, setProductos] = useState([]);               
     
   obtenerProductos()
     .then((productos) => {
       setProductos(productos);
     });
     
    if (productos) {
      return (
        <ul>
          {productos.map((producto) => (
            <ItemList producto={producto} />
          ))}
        </ul>  
      );
    } 
  }
  


