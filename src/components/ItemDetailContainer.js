import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ItemDetail } from "./ItemDetail";
import { Data } from "./Items";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(false);
    
    useEffect(() => {
        setCargando(true);
        Data()
            .then(resolve => {
                setItem(resolve);
                setCargando(false);
            })
    }, [])
    
    useEffect(() => {
        console.log(item)
    }, [item])

    if(cargando){
        return <div><CircularProgress /></div>
    } else {
        return <>
        {item.map(item=> <ItemDetail nombre={item.name} precio={item.precio} descripcion={item.detalle} img={item.img}/>)}
        </>
    };
}   

export default ItemDetailContainer;


