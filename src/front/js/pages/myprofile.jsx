import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";

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
  console.log("params", params)
  console.log(store.mySpaces);

  return (
    <div className="vh-75" style={{ marginBlockStart: "70 px" }}>
      <h1 className="title-text p-2 ml-5">My Profile</h1>

      <div
        className="d-flex justify-content-start p-2 ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >
        <ul class="nav nav-pills">
          <li class="nav-item">
            <Link class="btn-md btn m-2" aria-current="page" to="/myprofile/myspaces">My Spaces</Link>
          </li>
          <li class="nav-item">
            <Link class="btn-md btn m-2" to={"/reviews/all/" + store.perfil.id}>My Reviews</Link>
          </li>
          <li class="nav-item">
            <Link class="btn-md btn m-2" to="/catalogo">Catalogue</Link>
          </li>
        </ul>

        {/* <div className="row align-baseline row-cols-3 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <Link to="/myprofile/myspaces" className="btn-md btn">
              My Spaces
            </Link>
          </div>
          <div className="col">
            <Link to={"/reviews/all/" + store.perfil.id} className="btn-md btn">
              My Reviews
            </Link>
          </div>
          <div className="col">
            <Link to="/catalogo" className="btn-md btn">
              Catalogue
            </Link>
          </div>
        </div>
        <div className="row row-cols-3 mt-20 container-fluid"> */}
        {/* {store.mySpaces.map((item, i) => {
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
          })} */}
      </div>
    </div>
  );
};
