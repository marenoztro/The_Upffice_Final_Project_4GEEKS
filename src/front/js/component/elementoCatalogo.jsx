import React, { Component } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export const ElementoCatalogo = ({ name, description, images, price, id }) => {
  const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <div>
      <div className="card col-lg mt-30 mb-30" style={{ height: "40rem" }}>
        <div class="card-catalog">
          <img src={images} alt="Avatar" style={{ width: "100%" }} />
          <div class="container-catalog">
            <h4>
              <b>{name}</b>
            </h4>
            <p>{description}</p>
            <p>{price}</p>
          </div>
          <div className="d-flex justify-content-end align-self-baseline">
            <Link
              to={"/detail/" + id}
              className="btn btn-primary btn-sm"
              style={{ backgroundColor: "#A425E8" }}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};
