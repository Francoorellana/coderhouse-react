
import React from "react";
import { Link } from 'react-router-dom';
      
export function ItemList(props) {  
  return (  
    <>  
      <li key={props.producto.id}>{props.producto.name}</li>  
    </>  
  );  
}  
  
