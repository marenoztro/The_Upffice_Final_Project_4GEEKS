import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import InicioG from "./Logingoogle.jsx";
import "/workspace/The_Upffice_Final_Project_4GEEKS/src/front/styles/nav.css";

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
        <a className="navbar-brand" href="#">The Upffice</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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


      <div class="container">
        <div class="header">
          <h2>Create Account</h2>
	      </div>
          <form id="form" class="form">
            <div class="form-control">
              <label for="username">Username</label>
              <input type="text" placeholder="florinpop17" id="username" />
              <i class="fas fa-check-circle"></i>
              <i class="fas fa-exclamation-circle"></i>
              <small>Error message</small>
            </div>
          <div class="form-control">
            <label for="username">Email</label>
            <input type="email" placeholder="a@florin-pop.com" id="email" />
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="username">Password</label>
            <input type="password" placeholder="Password" id="password"/>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>
          <div class="form-control">
            <label for="username">Password check</label>
            <input type="password" placeholder="Password two" id="password2"/>
            <i class="fas fa-check-circle"></i>
            <i class="fas fa-exclamation-circle"></i>
            <small>Error message</small>
          </div>
          <button>Submit</button> {/*Hacer que este boton mande el registro */}
	      </form>
      </div>

      
    </nav>
  );
};

export default Navbar;
