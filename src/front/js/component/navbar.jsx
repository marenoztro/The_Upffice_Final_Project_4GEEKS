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
    <nav className="navbar navbar-expand-lg">
      <div>
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

      <form className="d-flex">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-expanded="false"
            aria-haspopup="listbox"
            role="combobox"
          ></input>
        </div>
      </form>

      <li className="nav-item">
        <a className="btn btn-primary" href="#" role="button">
          Sign In
        </a>
      </li>
    </div><Link to="/login">
        {store.auth ? (
          <button className="btn btn-primary" onClick={handleLogout}>
            Log out
          </button>
        ) : null}
      </Link>
    </nav>  
  );
};

export default Navbar;
