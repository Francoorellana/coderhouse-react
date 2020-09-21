import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


export function Data() {
  return new Promise((resolve, reject) => {                            
      setTimeout(() => {                                                 
        resolve([
          { id: "01", name: "Alfajor Maicena", detalle: "Alfajor relleno de dulce de leche", img: "./Imagenes/alfajorDDL.jpg", precio: "$20" },
          { id: "02", name: "Budin de Naranja", detalle: "Bizcocho con sabor a naranja y chips de chocolate", img: "./Imagenes/budinnaranja.jpg", precio: "$200" },
          { id: "03", name: "Chipa x 6", detalle: "Seis chipá rellenos de queso", img: "./Imagenes/chipax6.jpg", precio: "$100" },
        ]);                                                              
      }, 3000);                                                          
    })
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
     
   Data()
     .then((productos) => {
       setProductos(productos);
     });
     
    if (productos) {
      return (
        <div className="tarjeta" >
          {productos.map((producto, to) => (
              <NavLink to={`/productos/${producto.id}`} >
                <Card  >
                  <CardMedia className={classes.media} image={producto.img} />
                    <CardContent>
                      <h2> {producto.name} </h2>
                    <Button color="primary" variant="contained"  >
                      Ver mas
                    </Button>                    
                    </CardContent>                  
                </Card>
              </NavLink> 

            ))
          }
        </div>
      )
    } 
  }
