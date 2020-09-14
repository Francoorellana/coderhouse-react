import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function prueba() {
return new Promise((resolve, reject) => {                            
    setTimeout(() => {                                                 
      resolve([
        { id: "01", description: "Alfajor relleno de dulce de leche" },
        { id: "02", description: "Bizcocho con sabor a naranja y chips de chocolate" },
        { id: "03", description: "Seis chipá rellenos de queso" },
      ]);                                                              
    }, 3000);                                                          
  })
}

export function ItemDetail() {
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        prueba()
            .then(resolve => {
                setItem(resolve);
                setCargando(false);
            })
    }, [])
    
    useEffect(() => {
        console.log(item)
    }, [item])

    if(cargando){
        return <div><CircularProgress /></div>
    }

return (
    <>
     {item.map((i) => (
        <ul>
            {i.description}
        </ul>
    ))}
    </>
   );
}   


