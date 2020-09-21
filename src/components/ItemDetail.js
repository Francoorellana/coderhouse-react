import React, { useState, useEffect,useContext } from 'react';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { Contador } from "./ItemCount";
import "./Estilos.css";


export function ItemDetail(props){
    return(
        <div> 
         <Card>
                <CardMedia  image={props.img} />
                  <CardContent>
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

/* function ItemDetail(props){
    
    const [count, setCount] = useState(0);

    function giveMeCount(c){
        setCount(c)
        console.log('c => ', c, 'count => ', count);
    }    

    return(
        <div>{(context) => {
            const {addCart} = context;
            return(
            <div>
                <Card>
                <CardMedia  image={props.item.img} />
                  <CardContent>
                    <p> {props.item.name} </p>                    
                    </CardContent>
               </Card> 
                <Button style={{marginLeft: '11vw'}} id="carr" outline color='primary'>Comprar: </Button>
            </div>    
            )
            }}
        </div>
    )
}

export default ItemDetail;

//<ItemCount func={giveMeCount} nombre={props.nombre} id={props.id} categoria={props.categoria} precio={props.precio}/>
*/