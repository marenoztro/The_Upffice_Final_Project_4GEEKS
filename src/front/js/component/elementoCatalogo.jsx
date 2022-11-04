import React, { Component } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
export const ElementoCatalogo = ({ name, description, images, price, id }) => {
  const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <div>
      <div className="card col-lg mt-30 mb-30" style={{ height: "35rem", width: "40rem" }}>
        <div class="card-catalog">
          <img
            src={images}
            // alt={
            //   "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
            // }
            style={{ height: "249px", width: "100%", marginTop: "1rem", marginBotton: "5rem" }}
          />
          <div class="container-catalog mt-4">
            <h4 className="title-text">
              <b>{name}</b>
            </h4>
            <p className="body-text">{description}</p>
            <p className="body-text">USD - ${price}</p>
          </div>
          <div className="d-flex justify-content-end align-self-baseline">
            <Link
              to={"/detail/" + id}
              className="btn btn-primary btn-lg"
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
