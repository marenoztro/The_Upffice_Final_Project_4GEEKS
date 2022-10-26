import React, {useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Catalogo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid catalogo">
      <div className="row row-cols-3 mt-20 container-fluid">
        {store.catalogo.map((item, i) => {
          return (
            <ElementoCatalogo
              name={item.name}
              description={item.description}
              images={item.images}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
