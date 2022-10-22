import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-bg-dark container-flex w-100">
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/722C/production/_121782292_gettyimages-1220634080.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay d-block mt-3">
          <br />
        </div>
        <div className="card-img-overlay d-block mt-3">
          <p>
            <br />
            <br />
          </p>
          <h1 className="bg-light text-center display-1 mt-3 fw-bolder">
            The Upffice
          </h1>
          <div className="bg-light text-center fs-2 mt-3">
            <h1>The world of work is now infinite</h1>
          </div>
        </div>
      </div>
      <div className="container-flex text center p-3 mb-2 bg-white mt-5 text-dark">
        <div className="row mt-5 mb-5">
          <div className="col-1"></div>
          <div className="col-7">
            <h1 id="First_heading">
              Looking for
              <span className="text-muted"> spaces? </span>
            </h1>
            <Link
              to="/catalogo"
              classNameName="btn btn-warning"
              role="button"
              aria-pressed="true"
            >
              Search
            </Link>
            {/* <span> OR </span>
            <Link
              to="/postspace"
              classNameName="btn btn-primary"
              role="button"
              aria-pressed="true"
            >
              Post a space
            </Link> */}
          </div>
          <div className="col-3">
            <img
              src="https://cdn.shopify.com/s/files/1/0374/7155/1628/t/8/assets/010--standing-desk--small-desk--ergonomic-desk--modular-desk--sustainable-desk--working-desk--work-from-home-desks-1633654040281_1200x.jpg?v=1633654066g"
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div
        id="SecondHeading"
        className="container-flex text center p-3 mb-2 bg-white mt-5 text-dark"
      >
        <div className="row mt-5 mb-5">
          <div className="col-3">
            <img
              src="https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2020/10/GettyImages-1223377524.jpg?w=600&strip=all&quality=75"
              className="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div className="col-7">
            <h1>
              Mission & <span className="text-muted"> Vision </span>
            </h1>
            <p className="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div className="col-3"> </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div id="Portfolio" className="container bg-white text center">
        <h1>Perks of using Upffice</h1>
        <p className="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/601db1e43c76a444ae39fb6d/Implementing-work-from-home-strategies-can-help-you-stay-motivated-/960x0.jpg?format=jpg&width=960"
                className="card-img-top"
                alt="Card"
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Work & Travel</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia iure sed quidem totam, magnam reprehenderit culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://media.istockphoto.com/photos/happy-indian-woman-working-in-a-call-center-picture-id1223341967?k=20&m=1223341967&s=612x612&w=0&h=j5fiJWZHyBAheZmuN3vpgQZrNRBtiK17o0ihOtNOlig="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-primary"> Project Name </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia iure sed quidem totam, magnam reprehenderit culpa.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2020/10/GettyImages-1223377524.jpg?w=600&strip=all&quality=75"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-primary"> Project Name </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia iure sed quidem totam, magnam reprehenderit culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
