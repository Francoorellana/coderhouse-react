import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ItemDetail } from './ItemDetail';


const ItemDetailContainer = (props) => {
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(false);
            
    useEffect(() => {
        setCargando(true);
        setTimeout(() => {
            setItem(props.data);
            setCargando(false);
            }, 3000);
    }, []);

    if(cargando){
        return <div><CircularProgress /></div>
    } else {
        return <>  
        <div className="tarjeta" >
        {item.map(producto => (
           <ItemDetail key={producto.id} data={producto} />
          ))
        }
        </div>
        </>
    };  
}   

export default ItemDetailContainer;


