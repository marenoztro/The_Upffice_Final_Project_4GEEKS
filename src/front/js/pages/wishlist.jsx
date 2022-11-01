import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Wishlist = () => {
  {
    store.favorites.map((item, index) => {
      return (
        <li className="bg-dark" key={index}>
          <a className="dropdown-item bg-dark text-light" href="#">
            {item}
            <button
              onClick={() => {
                actions.deleteFavorites(item);
              }}
              className="btn-secondary float-end"
            >
              :papelera:
            </button>
          </a>
        </li>
      );
    });
  }
};
