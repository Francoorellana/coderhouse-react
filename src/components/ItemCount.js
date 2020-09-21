import React, { useState } from "react";
import "./Estilos.css";

export function Contador(props){
    let [contador, setContador] = useState(props.ini);

    let sumar = () => {
        if (contador >= props.max) {
            alert('Superaste el limite de compra por menor. Contactate conmigo para precio por mayor.');
        } else {
            setContador((prevcontador) => {
                return prevcontador + 1;
            });
        };
    };

    let restar = () => {
        if (contador === props.min) {
            alert('Todavia no agregaste productos');
        } else {
            setContador((prevcontador) => {
                return prevcontador - 1;
            });
        };
    }

    return (
        <div>
        <div className="contador">{contador}</div>
        <button type="button" onClick={restar} >-</button>
        <button type="button" onClick={sumar} >+</button>
        </div>
    );
}

