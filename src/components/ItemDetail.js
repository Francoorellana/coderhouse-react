import React from 'react';
import { useParams } from 'react-router-dom';
import { Contador } from './ItemCount';

function ItemDetail({ data }) {
  const { id } = useParams();

    return (
        <>
        <img 
            alt='product'
            src={data[`${id - 1}`].img}
        /> 
        <h2> Producto: {data[`${id - 1}`].name}</h2>
        <p> Detalle: {data[`${id - 1}`].detalle} </p>   
        <p> Precio: {data[`${id - 1}`].precio} </p> 
        <Contador ini={0} min={0} max={5} />
        <button onClick={() => alert("Va a comprar este producto")}>Comprar</button>
        </>
    );
}

export default ItemDetail;