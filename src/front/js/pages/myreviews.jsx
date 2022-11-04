import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ElementoCatalogo } from "../component/elementoCatalogo.jsx";

// use effect para que cuando cargue la pagina traiga el getspaces
// usar store para guardar en variable lo que traigo, y mapear store.spaces

export const Myreviews = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("vemos params.user_id", store.perfil.id)
  useEffect(() => {
    actions.getUserReviews(store.perfil.id);
    actions.getProfile();
    console.log(store.reviews);
  }, []);

  console.log(store.reviews);
  console.log(store.myReviews);

  return (
    <div className="vh-75" style={{ marginBlockStart: "70 px" }}>
      <h1 className="title-text p-2 ml-5">My Reviews</h1>

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
      {/* <div
        className=" row row-cols-3  d-flex justify-content-start  ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >
        {store.mySpaces.map((item, i) => {
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
        })}
      </div> */}
      <div
        className=" row row-cols-3  d-flex justify-content-start  ml-5 bg-light border"
        sytle={{ ml: "5000px" }}
      >

        <div className="card col-lg mb-30" style={{ width: "2 rem" }}>
          {/* <h4 className="title-text ml-5"> Reviews</h4> */}
          <ul>
            <h3 className="title-text ml-5"> {store.detailedSpace.name}</h3>
            {store.myReviews.length > 0 ? store.myReviews.map((item) => <li className="body-text">{item.message}</li>) : <p className="body-text">There's no reviews yet</p>}
          </ul>
        </div>
      </div>
    </div>
  );
};
