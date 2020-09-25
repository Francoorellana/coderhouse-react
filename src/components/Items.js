import React, { useState, useEffect } from "react";
import { RenderCard } from "./Card";


export function Items (props) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductos(props.data);
    }, 2000);
  }, [props.data]);

  if (productos) {     
      return (
      <div className="tarjeta" >
        {productos.map(producto => (
            <RenderCard key={producto.id} producto={producto} />
          ))
        }
      </div>
    )
  } 
}
