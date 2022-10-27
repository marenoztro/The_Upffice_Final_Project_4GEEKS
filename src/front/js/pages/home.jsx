import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 float-end align-self-center">
            {/* <h1 className="title-text text-center">The Upffice</h1> */}
            <img
              src="https://res.cloudinary.com/marenoztro/image/upload/v1666818417/theUpffice/Logo_Upffice_Horizontal_36_2x_a1xqf3.png"
              style={{ width: "30rem" }}
              className="mx-auto d-block img-fluid"
            />
            <div>
              <h2 className=" body-text text-center">
                The world of work has been upgraded
              </h2>
            </div>
            <br />
            <div className="text-center">
              <button
                type="button"
                className="btn-lg btn"
                data-bs-toggle="button"
                autocomplete="off"
              >
                Looking for spaces?
              </button>
            </div>
          </div>
          <div className="col-sm-4 mr-auto">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/722C/production/_121782292_gettyimages-1220634080.jpg"
              className="rounded float-start"
              style={{ width: "58rem" }}
              alt="..."
            />
          </div>
        </div>
        <hr />
        <div className="card-group">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
