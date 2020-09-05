import React from "react";
import { Items } from "./Items";


export function Greeting(props) {
    return (
        <h1>
            Bienvenido a {props.nombre}
            <Items />            
        </h1>
    );
}



