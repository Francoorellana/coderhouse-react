import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { DetalleProducto } from "./ItemDetail";


function obtenerProductos() {                                                                                          
  return new Promise((resolve, reject) => {                            
      setTimeout(() => {                                                 
        resolve([
          { id: "01", name: "Alfajor Maicena", stock: 5, img: "./Imagenes/alfajorDDL.jpg" },
          { id: "02", name: "Budin de Naranja", stock: 5, img: "./Imagenes/budinnaranja.jpg" },
          { id: "03", name: "Chipa x 6", stock: 6, img: "./Imagenes/chipax6.jpg" },
        ]);                                                              
      }, 2000);                                                          
    });                                                                  
 }   

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 200,
  },
});

export function Items() {
   const [productos, setProductos] = useState([]);   
   const classes = useStyles();            
     
   obtenerProductos()
     .then((productos) => {
       setProductos(productos);
     });
     
    if (productos) {
      return (
        <div className="tarjeta" >
          {productos.map((producto) => (
              <Card >
                <CardMedia className={classes.media} image={producto.img} />
                  <CardContent>
                    <h2> {producto.name} </h2>
                    <p> <DetalleProducto /> </p>
                  </CardContent>
                  <Button size="small" color="primary">
                    Comprar
                  </Button>
                  <Button size="small" color="primary">
                    Agregar al carrito
                  </Button>
              </Card>
            ))
          }       
        </div>
      );
    } 
  }
