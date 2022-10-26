import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import InicioG from "./Logingoogle.jsx";
import { openform, closeform } from "./overlay.jsx";
//import {isEmail, setSuccessFor, setErrorFor, CheckInputs} from "./Validation.jsx";
//import {forms, pwShowHide, links} from "./login.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleLogout = () => {
    actions.logout();
    if (!store.auth) {
      //true
      navigate.push("/login");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          The Upffice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            {/* <li className="nav-item">
              <InicioG />
            </li> */}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recursos
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Hacer una reserva
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Convirtete en un host
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ayuda
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/*boton para iniciar sesion */}
      <div id="overlay" class="overlay">
        <closeform>
        <span class="closebtn" onclick="closeform()" title="Cerrar overlay">X</span>
        </closeform>
        <div class="wrap">
          {/*inicio de sesion*/}
          <section class="container forms">
            <div class="form login">
              <div class="form-content">
                {/*Parte de Login*/}
                <header>Log In</header>
                <form id="form" action="#">
                  <div class="field input-field">
                    <input type="email" placeholder="Email" id="email"></input>
                    {/*mensaje de error*/}
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                  </div>

                  <div class="field input-field">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                    ></input>
                    <i class="bx bx-hide eye-icon"></i>
                  </div>

                  <div class="form-link">
                    <a href="#" class="forgot-pass">
                      Forgot password?
                    </a>
                  </div>

                  <div class="field button-field">
                    <button>Log In</button>
                  </div>
                </form>

                <div class="form-link">
                  <span>
                    Don't have an account?{" "}
                    <a href="#" class="link signup-link">
                      Sign Up
                    </a>
                  </span>
                </div>
              </div>

              <div class="line"></div>

              <div class="login-google">
                <InicioG />
              </div>
            </div>

            {/*Parte de Signup*/}
            <div class="form signup">
              <div class="form-content">
                <header>Create Account</header>
                <form id="form" action="#">
                  <div class="field input-field">
                    <input type="email" placeholder="Email" id="email"></input>
                    {/*mensaje de error*/}
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                  </div>

                  <div class="field input-field">
                    <input
                      type="password"
                      placeholder="Create password"
                      id="password"
                    ></input>
                    <i class="bx bx-hide eye-icon"></i>
                    {/*mensaje de error*/}
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                  </div>

                  <div class="field input-field">
                    <input
                      type="password"
                      placeholder="Re-enter password"
                      id="password2"
                    ></input>
                    <i class="bx bx-hide eye-icon"></i>
                    {/*mensaje de error*/}
                    <i class="fas fa-check-circle"></i>
                    <i class="fas fa-exclamation-circle"></i>
                    <small>Error message</small>
                  </div>

                  <div class="field button-field">
                    <button>Sign Up</button>
                  </div>
                </form>

                <div class="form-link">
                  <span>
                    Already have an account?{" "}
                    <a href="#" class="link login-link">
                      Login
                    </a>
                  </span>
                </div>
              </div>

              <div class="line"></div>

              <div class="login-google">
                <InicioG />
              </div>
            </div>
          </section>
        </div>
      </div>
      <openform>
      <button class="openbtn" onclick="openform()">Sign up</button>
      </openform>
    </nav>
  );
};

export default Navbar;
