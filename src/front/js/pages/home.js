import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div class="text-bg-dark container-flex w-100">
        <img
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/722C/production/_121782292_gettyimages-1220634080.jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay d-block mt-3">
          <br />
        </div>
        <div class="card-img-overlay d-block mt-3">
          <p>
            <br />
            <br />
          </p>
          <h1 class="bg-light text-center display-1 mt-3 fw-bolder">
            The Upffice
          </h1>
          <div class="bg-light text-center fs-2 mt-3">
            <h1>The world of work is now infinite</h1>
          </div>
        </div>
      </div>
      <div class="container-flex text center p-3 mb-2 bg-white mt-5 text-dark">
        <div class="row mt-5 mb-5">
          <div class="col-1"></div>
          <div class="col-7">
            <h1 id="First_heading">
              Looking for
              <span class="text-muted"> spaces? </span>
            </h1>
            <a
              href="#"
              class="btn btn-primary btn-lg active text-center"
              role="button"
              aria-pressed="true"
            >
              Search
            </a>
          </div>
          <div class="col-3">
            <img
              src="https://cdn.shopify.com/s/files/1/0374/7155/1628/t/8/assets/010--standing-desk--small-desk--ergonomic-desk--modular-desk--sustainable-desk--working-desk--work-from-home-desks-1633654040281_1200x.jpg?v=1633654066g"
              class="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div class="col-1"></div>
        </div>
      </div>
      <div
        id="SecondHeading"
        class="container-flex text center p-3 mb-2 bg-white mt-5 text-dark"
      >
        <div class="row mt-5 mb-5">
          <div class="col-3">
            <img
              src="https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2020/10/GettyImages-1223377524.jpg?w=600&strip=all&quality=75"
              class="img-fluid rounded-circle"
              alt="..."
            />
          </div>
          <div class="col-7">
            <h1>
              Mission & <span class="text-muted"> Vision </span>
            </h1>
            <p class="lead">
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </p>
          </div>
          <div class="col-3"> </div>
          <div class="col-1"></div>
        </div>
      </div>
      <div id="Portfolio" class="container bg-white text center">
        <h1>Perks of using Upffice</h1>
        <p class="lead">
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
          ligula porta felis euismod semper. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/601db1e43c76a444ae39fb6d/Implementing-work-from-home-strategies-can-help-you-stay-motivated-/960x0.jpg?format=jpg&width=960"
                class="card-img-top"
                alt="Card"
              />
              <div class="card-body">
                <h5 class="card-title text-primary">Work & Travel</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia iure sed quidem totam, magnam reprehenderit culpa.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://media.istockphoto.com/photos/happy-indian-woman-working-in-a-call-center-picture-id1223341967?k=20&m=1223341967&s=612x612&w=0&h=j5fiJWZHyBAheZmuN3vpgQZrNRBtiK17o0ihOtNOlig="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-primary"> Project Name </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia iure sed quidem totam, magnam reprehenderit culpa.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img
                src="https://www.thetimes.co.uk/money-mentor/wp-content/uploads/2020/10/GettyImages-1223377524.jpg?w=600&strip=all&quality=75"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-primary"> Project Name </h5>
                <p class="card-text">
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
