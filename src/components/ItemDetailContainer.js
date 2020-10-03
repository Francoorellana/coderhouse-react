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
            setItem(item[`${id - 1}`]);
            setCargando(false);            
            }, 3000);
    }, []);

    if(cargando){
        return <div><CircularProgress /></div>
    } else {
        return <>              
            <ItemDetail producto={props.item[`${id - 1}`]} />
            </>
    };  
}   

export default ItemDetailContainer;

