import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Myspaces = () => {
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
      <h1 className="title-text p-2 ml-5">My Spaces</h1>
      <div
        className="d-flex justify-content-start p-2 ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <Link to="/myprofile" className="btn-md btn">
              Back
            </Link>
            {/* <div className="btn-md btn">Back</div> */}
          </div>
          <div className="col">
            <Link to="/catalogo" className="btn-md btn">
              Catalogue
            </Link>
            {/* <div className="btn-md btn">Catalogue</div> */}
          </div>
        </div>
      </div>
      <div
        className=" row row-cols-3 mt-20 d-flex justify-content-start p-2 ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >
        {store.mySpaces.length > 0 ? store.mySpaces.map((item, i) => {
          return (
            <ElementoCatalogo
              name={item.space.name}
              description={item.space.description}
              images={item.space.images}
              price={item.space.price}
              key={item.space.id}
              id={item.space.id}
            />
          );
        }) : <p>You don't have any spaces yet</p>}
      </div>
    </div>
  );
};
