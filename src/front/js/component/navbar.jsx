import React, { useContext } from "react";
import { Context } from "../store/appContext.jsx";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="container-fluid">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/marenoztro/image/upload/v1666820926/theUpffice/Logo_U_solo_para_Navbar_a5ah0t.png"
            style={{ width: "5rem" }}
            className="mx-auto d-block"
          />
        </Link>
        <Link to="/">
          <h2>
            The Upffice
          </h2>
          </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-text nav-item dropdown">
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

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                style={{ width: "2rem" }}>
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 
                256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 
                17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
              </svg>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/login" className="btn sign">
                <li className="dropdown-item" >
                  Log In  
                </li>
              </Link>
              <Link to="/signup" className="btn sign">
                <li className="dropdown-item" >
                  Sign Up  
                </li>
              </Link>
              <div class="dropdown-divider"></div>
              <Link to="/faq">
                <a className="dropdown-item">
                  Help
                </a>
              </Link>
            </div>
          </li>

        </div>
      </div>
      <Link to="/login">
        {store.auth ? (
          <button className="nav-text btn" onClick={handleLogout}>
            Log In
          </button>
        ) : null}
      </Link>
    </nav>
  );
};

export default Navbar;
