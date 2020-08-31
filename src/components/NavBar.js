import React from "react";
import { NavLink } from "react-router-dom";
import "./Estilos.css";
import { CartIcon } from "./CartIcon";

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName="activeLink">
                        Home
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/productos" activeClassName="activeLink">
                        Productos
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/carrito" activeClassName="activeLink">
                        <CartIcon />
                    </NavLink>
                    <hr />
                </li>
                <li>
                    <NavLink to="/contacto" activeClassName="activeLink">
                        Contacto
                    </NavLink>
                    <hr />
                </li>               
            </ul>
        </nav>
    );
}

