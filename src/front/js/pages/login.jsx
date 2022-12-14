import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState("");
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  // const handleClick = () => {
  //   setClick(true);
  // };

  return (
    <div className="container-fluid vh-75">
      <div className="text-center mt-5">
        {store.auth ? (
          navigate("/")
        ) : (
          <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label login">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label login"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn"
            // onClick={handleClick}
            >
              Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
