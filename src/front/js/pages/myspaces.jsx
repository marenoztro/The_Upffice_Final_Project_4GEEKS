import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const MySpaces = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getMySpaces(params.theid);
    console.log(store.MySpaces.name);
    console.log(store.My.description);
    console.log(store.detailedSpace);
  }, []);

  // if (!search) {
  //   results = user;
  // } else {
  //   results = user.filter(
  //     (dato) =>
  //       dato.name.toLowerCase().includes(search.toLowerCase()) ||
  //       dato.description.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

  // const handleSearch = (e) => {
  //   console.log("Ejecutando");
  //   setSearch(e.target.value);
  //   console.log(search);
  //   console.log(results);
  // };

  return (
    <div className="container-fluid catalogo">
      <div>
        <div className="main position-absolute top-40 start-50 translate-middle-x">
          <h1 className="title-text">Find the best spaces</h1>
          <div>
            <li className="list-group-item">
              <h3>Description</h3>
              {store.mySpaces.user}
            </li>

            <li className="list-group-item">
              <h3>{store.mySpaces.spaces}</h3>
            </li>
            <li className="list-group-item">
              <h3>Location</h3>
              {/* {store.detailedSpace.location} */}
            </li>
            <li className="list-group-item">
              <h3>Amenidades</h3>
              <ul>{/* <li>{store.detailedSpace.amenities}</li> */}</ul>
              <ul>{/* <li>{store.detailedSpace.amenities}</li> */}</ul>
              <ul>{/* <li>{store.detailedSpace.amenities}</li> */}</ul>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
