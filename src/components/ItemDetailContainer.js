import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(false);
    const { id } = useParams();
            
    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
            setItem(props.item[`${id - 1}`]);
            setCargando(false);
            
            }, 3000);
    }, []);
    console.log(item)

    if(cargando){
        return <div><CircularProgress /></div>
    } else {
        return <>              
            <ItemDetail producto={props.item[`${id - 1}`]} />
            </>
    };  
}   

export default ItemDetailContainer;

/*
<img 
alt='product'
src={item[`${id - 1}`].img}
/> 
<h2> Producto: {item[`${id - 1}`].name}</h2>
<p> Detalle: {item[`${id - 1}`].detalle} </p>   
<p> Precio: {item[`${id - 1}`].precio} </p> 
*/