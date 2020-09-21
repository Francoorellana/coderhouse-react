import React from "react";
import { Items } from "./Items";
import  ItemDetailContainer from "./ItemDetailContainer";


export function Greeting(props) {
    return (
        <>
        <h3>Bienvenido a {props.nombre}</h3>
        <img src="./Imagenes/logo.jpg" />
        </>
        
    );
}

export function Productos() {
    return (
        <>
        <Items />  
        <ItemDetailContainer />      
        </>
    );
}


