import React, { useState } from "react";
import "./Estilos.css";

export function Contador(props){
    let [contador, setContador] = useState(parseInt(props.ini));

    let sumar = () => {
        if (contador >= parseInt(props.max)) {
            alert('Superaste el limite de compra por menor. Contactate conmigo para precio por mayor.');
        } else {
            setContador((prevcontador) => {
                return prevcontador + 1;
            });
        };
    };

    let restar = () => {
        if (contador === parseInt(props.min)) {
            alert('Todavia no agregaste productos');
        } else {
            setContador((prevcontador) => {
                return prevcontador - 1;
            });
        };
    }

    return (
        <div>
        <p className="producto"> {props.producto} </p>
        <div className="contador">{contador}</div>
        <button type="button" onClick={restar} >-</button>
        <button type="button" onClick={sumar} >+</button>
        </div>
    );
}



/*class Contador extends Component {
    constructor(props){
        super(props);

        this.state = {
            inicio: 0,
            min: 0,
            maximo: 15,
        }
    }

    if (inicio) {
        alert("Aun no ha seleccionado productos")
    }

    sumar = () => {
        this.setState({
            inicio: this.state.inicio +1,
        });
      }
    restar = () => {
        this.setState({
          inicio: this.state.inicio -1,
        });
      }

    render () {
        return(
          
        )
    }
}

export default Contador;*/