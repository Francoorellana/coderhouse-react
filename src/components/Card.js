import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: 200,
    },
    media: {
      height: 200,
    },
  });


export function RenderCard (props){
    const classes = useStyles();

    return(
        <div >
        <NavLink exact to={`/productos/${props.producto.id}`}  >
            <Card  >
                <CardMedia className={classes.media} image={props.producto.img} />
                <CardContent>
                <h2> {props.producto.name} </h2>
                <Button color="primary" variant="contained"  >
                Ver mas
                </Button>                    
                </CardContent>                  
            </Card>
        </NavLink>
        
        </div> 
    );
}





