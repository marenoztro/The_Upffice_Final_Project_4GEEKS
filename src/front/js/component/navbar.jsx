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
        <a className="nav-text navbar-brand" href="#">
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
          <li className="nav-text nav-item">
            {!store.auth ? (
              <Link to="/login" className="btn sign">
                Sign In
              </Link>
            ) : null}
          </li>
        </div>
      </div>
      <Link to="/login">
        {store.auth ? (
          <button className="nav-text btn" onClick={handleLogout}>
            Log out
          </button>
        ) : null}
      </Link>
      <Link to="/myprofile">
        {store.auth ? (
          <button className="nav-text btn" >
            My profile
          </button>
        ) : null}
      </Link>
    </nav>
  );
};
export default Navbar;