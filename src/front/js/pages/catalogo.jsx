import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Catalogo = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState(null);

  let user = store.catalogo;
  let results = [];

  if (!search) {
    results = user;
  } else {
    results = user.filter(
      (dato) =>
        dato.name.toLowerCase().includes(search.toLowerCase()) ||
        dato.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleSearch = (e) => {
    console.log("Ejecutando");
    setSearch(e.target.value);
    console.log(search);
    console.log(results);
  };

  return (
    <div className="container-fluid catalogo">
      <div>
        <div className="main position-absolute top-40 start-50 translate-middle-x">
          <h1 className="title-text">Find the best spaces</h1>
          <div className="form-outline">
            <input
              style={{ width: "24rem" }}
              type="text"
              id="form12"
              className="marlon"
              placeholder="Search spaces..."
              value={search}
              onChange={handleSearch}
            />

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row row-cols-3 mt-20 container-fluid">
        {results.map((item, i) => {
          return (
            <ElementoCatalogo
              name={item.name}
              description={item.description}
              images={item.images}
              price={item.price}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
