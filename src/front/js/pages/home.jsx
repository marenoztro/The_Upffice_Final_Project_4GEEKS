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
              <Link to="/catalogo" className="btn-lg btn">
                Looking for spaces?
              </Link>
              {store.auth ? (
                <Link to="/postspaces" className="btn-lg btn">
                  Want to post spaces?
                </Link>
              ) : null}
            </div>
          </div>
          <div className="col-sm-6 p-0">
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/722C/production/_121782292_gettyimages-1220634080.jpg"
              className="w-100 rounded float-start img-fixed"
              alt="..."
            />
          </div>
        </div>
        <section class="wrapper">
          <div class="container-fostrap">
            <div>
              <img src="" class="fostrap-logo" />
              <h1 class="heading">Perks of using Upffice</h1>
            </div>
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a class="img-card" href="">
                        <img
                          src="https://res.cloudinary.com/marenoztro/image/upload/v1666828077/theUpffice/Beneficio_Endless_Possibilites_rhz19k.png"
                          style={{ width: "13rem" }}
                        />
                      </a>
                      <div class="card-content">
                        <h4 class="body-text text-center card-title">
                          Endless Possibilities
                        </h4>
                        <p class="body-text">
                          You can choose the spaces that inspire you to do the
                          best work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="card">
                      <a className="img-card" href="">
                        <img
                          src="https://res.cloudinary.com/marenoztro/image/upload/v1666828077/theUpffice/Beneficio_Save_Your_Favorites_vo8zfy.png"
                          style={{ width: "13rem" }}
                        />
                      </a>
                      <div className="card-content">
                        <h4 className="body-text text-center card-title">
                          Save your Favorite Spaces
                        </h4>
                        <p className="body-text">
                          Become a frequent guest at the most pleasing
                          workspaces for you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="card">
                      <a className="img-card" href="/">
                        <img
                          src="https://res.cloudinary.com/marenoztro/image/upload/v1666828077/theUpffice/Beneficio_Hi-Speed_Connection_nycna4.png"
                          style={{ width: "13rem" }}
                        />
                      </a>
                      <div className="card-content">
                        <h4 className="body-text text-center card-title">
                          Hi-Speed Connection
                        </h4>
                        <p className="body-text">
                          All of spaces offer a high-speed connection, with over
                          500mbps fibre broadband.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
