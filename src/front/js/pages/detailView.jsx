import React, { Component } from "react";
import { Context } from "../store/appContext.jsx";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const DetailSpace = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getDetailedSpace(params.theid);
    console.log(store.detailedSpace.name);
    console.log(store.detailedSpace.description);
    console.log(store.detailedSpace);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={store.detailedSpace.images}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={store.detailedSpace.images}
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3> Name </h3>
            {store.detailedSpace.name}
          </li>
          <li className="list-group-item">
            <h3>Description</h3>
            {store.detailedSpace.description}
          </li>
          <li className="list-group-item">
            <h3>{store.detailedSpace.price}</h3>
          </li>
          <li className="list-group-item">
            <h3>Location</h3>
            {store.detailedSpace.location}
          </li>
          <li className="list-group-item">
            <h3>Amenidades</h3>
            <ul>
              <li>{store.detailedSpace.amenities}</li>
            </ul>
            <ul>
              <li>{store.detailedSpace.amenities}</li>
            </ul>
            <ul>
              <li>{store.detailedSpace.amenities}</li>
            </ul>
          </li>
          <li className="list-group-item">
            <h3>Reviews</h3>
            <li>{store.detailedSpace.reviews}</li>
          </li>
          <li className="list-group-item"></li>
        </ul>
      </div>
      <div className="text-center">
        <Link to="/catalogo" className="btn btn-warning">
          Go back
        </Link>
      </div>
    </>
  );
};
