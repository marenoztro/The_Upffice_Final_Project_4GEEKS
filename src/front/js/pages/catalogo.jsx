import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext";

export const Catalogo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Searchbar />
      <br />
      <br />
      <br />
      <br />
      <div className="row row-cols-3 mt-20">
        <ElementoCatalogo />
        <ElementoCatalogo />
        <ElementoCatalogo />
        <ElementoCatalogo />
        <ElementoCatalogo />
        <ElementoCatalogo />
      </div>
    </div>
  );
};
