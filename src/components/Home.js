import React from "react";

export function Greeting(props) {
    return (
        <>
        <h3>Bienvenido a {props.nombre}</h3>
        <img alt="" src="/imagenes/logo.jpg" />
        </>       
    );
}


