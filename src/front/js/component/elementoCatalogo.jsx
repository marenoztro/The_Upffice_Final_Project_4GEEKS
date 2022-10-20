import React, { Component } from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";

export const ElementoCatalogo = ({ name, description, images }) => {
  // const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <div>
      <div className="container">
        <div className="card col-4 mt-30" style={{ width: "24rem" }}>
          <img
            src={images}
            className="card-img-top"
            style={{ width: "24rem", height: "20rem" }}
            alt="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
          />
          <div className="card-body">
            <p className="card-title display-4">{name}</p>
            <div className="card-text">
              <h5 className="titulo-catalogo">Descripción</h5>
              {description}
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <Link to="/" className="btn btn-primary btn-sm">
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
