import React, { Component } from "react";
import { Link } from "react-router-dom";

export const ElementoCatalogo = () => {
  const { store, actions } = useContext(Context); //consumir el contexto
  return (
    <>
      {spaces.map((item, i) => {
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
                  <p className="card-text">Como va la vaina</p>
                  <p className="card-text">Este es un card de prueba</p>
                  <p className="card-text">No tengo nada que poner</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
