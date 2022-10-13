import React, { Component } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";

export const ElementoCatalogo = ({
  ubicacion,
  rating,
  amenidades,
  reviews,
  descripcion,
}) => {
  // const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <div>
      <div className="container">
        <div className="card col-4 mt-30" style={{ width: "24rem" }}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCv5zURHVtYiHGGuU-7b_w18cX0dGBiD6BgiOKyDw&s"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Hola</h5>
            <p className="card-text">
              <h1>Esta es la ubicación</h1>
              {ubicacion}
            </p>
            <p className="card-text">
              <h1>Este es el rating que tiene la propiedad</h1>
              {rating}
            </p>
            <p className="card-text">
              <h1>Las amenidades son</h1>
              {amenidades}
            </p>
            <p className="card-text">
              <h1>Estos reviews tiene el sitio</h1>
              {reviews}
            </p>
            {/* <p className="card-text">
                <h1>Fotos del sitio</h1>
                {item.fotos}
              </p> */}
            <p className="card-text">
              <h1>Descripción</h1>
              {descripcion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
