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

function ItemDetail({ producto, newContador }) {
    const classes = useStyles();
    //const [newContador, setnewContador] = useState(0);
                 
    return (
        <div>
            <Card  >
                <CardMedia className={classes.media} image={producto.img} />
                <CardContent>
                <h2> {producto.name} </h2>
                <h3> {producto.detalle} </h3>
                <h4> {producto.precio} </h4>
                <Contador ini={0} min={0} max={5}  />
                <Button variant="contained" color="primary" onClick={() => alert("Va a comprar este producto")} >Comprar {newContador}  unidades </Button>                 
                </CardContent>                  
            </Card>        
       </div >
    );
}

export default ItemDetail;


