import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Myprofile = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    // actions.getMySpaces(params.theid);
    actions.getProfile();
    console.log(store.mySpaces.name);
    console.log(store.mySpaces.description);
    console.log(store.mySpaces.location);
  }, []);

  console.log(store.mySpaces);

  return (
    <div style={{ marginBlockStart: "70 px" }}>
      <h1 className="title-text p-2 ml-5">My Profile</h1>

      <div
        className="d-flex justify-content-start p-2 ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="btn-md btn">My Spaces</div>
          </div>
          <div className="col">
            <div className="btn-md btn">My Reviews</div>
          </div>
          <div className="col">
            <div className="btn-md btn">Wishlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};
