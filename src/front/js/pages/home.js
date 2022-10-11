import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
<<<<<<< HEAD
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <Link to="/catalogo">
        <button className="btn btn-primary">Ver catalogo</button>
      </Link>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
=======
  return (
    <div className="text-center mt-5">
      <h1>YOU ARE HOME</h1>
>>>>>>> 6ca67b0706d29065dac68abb1c0b50ddb7f5b27b
    </div>
  );
};
