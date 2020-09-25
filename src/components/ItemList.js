
import React from "react";
      
export function ItemList(props) {  
  return (  
    <>  
      <li key={props.producto.id}>{props.producto.name}</li>  
    </>  
  );  
}  
  
