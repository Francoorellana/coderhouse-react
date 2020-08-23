import React from "react";


export function Greeting(props) {
    return (
        <h1>
            Bienvenido Sr/a. {props.apellido}, {props.nombre}
        </h1>
    );
}


