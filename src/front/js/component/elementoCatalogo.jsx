import React, { Component } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
export const ElementoCatalogo = ({ name, description, images }) => {
  // const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <div className="card col-4 mt-30" style={{ width: "24rem" }}>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCv5zURHVtYiHGGuU-7b_w18cX0dGBiD6BgiOKyDw&s"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h1 className="card-title">Titulo de la casa</h1>
        {/* <h6 className="card-text">
              <h5 className="titulo-catalogo">Esta es la ubicación</h5>
              {ubicacion}
            </h6> */}
        {/* <h6 className="card-text">
              <h5 className="titulo-catalogo">Las amenidades son</h5>
              {amenidades}
            </h6>
            <h6 className="card-text">
              <h5 className="titulo-catalogo">Estos reviews tiene el sitio</h5>
              {reviews}
            </h6>
            {/* <p className="card-text">
                <h1>Fotos del sitio</h1>
                {item.fotos}
              </p> */}
        {/* <h6 className="card-text">
              <h5 className="titulo-catalogo">Descripción</h5>
              {descripcion}
            </h6> */}
      </div>
    </div>
  );
};
