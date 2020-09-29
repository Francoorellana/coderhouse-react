import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { Contador } from './ItemCount';

const useStyles = makeStyles({
    root: {
      width: 600,
    },
    media: {  
      height: 200,
      width: 400,
      margin: 10,
    },
  });


function ItemDetail({ producto }) {
    const classes = useStyles();
    const [contador, setContador] = useState(0);

    function actualizaContador(contador){
        setContador(contador)
    }
    
    return (
        <div>
            <Card  >
                <CardMedia className={classes.media} image={producto.img} />
                <CardContent>
                <h2> {producto.name} </h2>
                <h3> {producto.detalle} </h3>
                <h4> {producto.precio} </h4>
                <Contador ini={0} min={0} max={5} funcion={actualizaContador} />
                <Button variant="contained" color="primary" onClick={() => alert("Va a comprar este producto")}>Comprar {contador} unidades </Button>                 
                </CardContent>                  
            </Card>        
       </div >
    );
}

export default ItemDetail;


