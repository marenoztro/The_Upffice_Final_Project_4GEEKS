/*
import React, { useContext } from "react";
import { Context } from "../store/appContext";
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
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/login">
        <span className="navbar-brand mb-0 h1">LOGIN VIEW</span>
      </Link>
      <div className="ml-auto">
        <Link to="/login">
          {store.auth ? (
            <button className="btn btn-primary" onClick={handleLogout}>
              Log out
            </button>
          ) : null}
        </Link>
      </div>
    </nav>
  );
};
*/