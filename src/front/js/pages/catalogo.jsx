import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { ElementoCatalogo } from "./component/ElementoCatalogo.jsx";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";
import { Searchbar } from "../component/searchBar.jsx";
import { Context } from "../store/appContext";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

const spaces = [
  {
    id: 1,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 2,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 3,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 4,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 5,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 6,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
  {
    id: 7,
    ubicacion: "Bogota",
    rating: "minivan",
    amenidades: "cocina, cafe, cama, ventana",
    reviews: 7,
    descripcion: "Lorem impsum de la santisima made",
  },
];

export const Catalogo = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid catalogo">
      <div className="row row-cols-3 mt-20 container-fluid">
        {spaces.map((item, i) => {
          return (
            <ElementoCatalogo
              ubicacion={item.ubicacion}
              rating={item.rating}
              amenidades={item.amenidades}
              reviews={item.reviews}
              descripcion={item.descripcion}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};
