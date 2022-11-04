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
        <Link className="nav-text navbar-brand title-text" to="#">
          The Upffice
        </Link>
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
          {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-text nav-item dropdown">
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    Hacer una reserva
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Convirtete en un host
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Ayuda
                  </Link>
                </li>
              </ul>
            </li>
          </ul> */}
          {/* <li className="nav-text nav-item">
            {!store.auth ? (
              <Link to="/login" className="btn sign title-text">
                Sign In
              </Link>
            ) : null}
          </li> */}
        </div>
      </div>

      {store.auth ? (
        <Link to="/myprofile">
          <button className="nav-text btn mr-3 title-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </button>
        </Link>
      ) : null}
      {store.auth ? (
        <Link to="/login">
          <button className="nav-text btn mr-3 title-text" onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
          </button>
        </Link>
      ) : <Link to="/login" className="btn sign">
        Sign In
      </Link>}
      <div class="dropdown">
        <button class="btn title-text" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
          <li><Link class="dropdown-item active mt-1" to="/">Home</Link></li>
          <li><Link class="dropdown-item active mt-1" to="/catalogo">Catalogue</Link></li>
          <li><Link class="dropdown-item active mt-1" to="/myprofile">My Profile</Link></li>
          <li><Link class="dropdown-item active mt-1" to="/postspaces">Post your space</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;