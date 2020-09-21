import React from 'react';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { Contador } from "./ItemCount";
import "./Estilos.css";


export function ItemDetail(props){
    return(
        <div> 
         <Card>
                <CardMedia  image={props.img} />
                  <CardContent>
                     <p> Id: {props.id} </p>
                    <p> Producto: {props.nombre} </p>                    
                    <p> Detalle: {props.descripcion} </p>   
                    <p> Precio: {props.precio} </p>   
                  </CardContent>
                  <Contador ini={0} min={0} max={5} />
                  <Button color="primary" variant="contained" onClick={() => alert("Va a comprar este producto")} >
                    Comprar
                  </Button>
              </Card>
        </div>
    )
}

