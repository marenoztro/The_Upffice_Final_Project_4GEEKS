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
                          style={{ width: "16rem" }}
                        />
                      </a>
                      <div class="card-content">
                        <h4 class="body-text text-center card-title">
                          Endless Possibilities
                        </h4>
                        <p class="">
                          Tutorial to make a carousel bootstrap by adding more
                          wonderful effect fadein ...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a
                        class="img-card"
                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                      >
                        <img
                          src="https://res.cloudinary.com/marenoztro/image/upload/v1666828077/theUpffice/Beneficio_Save_Your_Favorites_vo8zfy.png"
                          style={{ width: "16rem" }}
                        />
                      </a>
                      <div class="card-content">
                        <h4 class="body-text text-center card-title">
                          Material Design Responsive Menu
                        </h4>
                        <p class="">
                          Material Design is a visual programming language made
                          by Google. Language programming...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-4">
                    <div class="card">
                      <a
                        class="img-card"
                        href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html"
                      >
                        <img
                          src="https://res.cloudinary.com/marenoztro/image/upload/v1666828077/theUpffice/Beneficio_Hi-Speed_Connection_nycna4.png"
                          style={{ width: "18rem" }}
                        />
                      </a>
                      <div class="card-content">
                        <h4 class="body-text text-center card-title">
                          Hi-Speed Connection Guaranteed
                        </h4>
                        <p class="">
                          tutorials button hover animation, although very much a
                          hover button is very beauti...
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
    </>
  );
};
