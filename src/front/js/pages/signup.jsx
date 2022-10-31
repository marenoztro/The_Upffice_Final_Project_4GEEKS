import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/home.css";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    // const [login, setLogin] = useState("");
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
    e.preventDefault();
    actions.signup(username, email, password, password2);
  };

  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
        {store.auth ? (
          navigate("/")
        ) : (
          <form className="w-50 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label login">
                    Username
                </label>
                <input
                    type="username"
                    placeholder="Ex.: JohnD1"
                    className="form-control"
                    id="exampleInputUsername"
                    aria-describedby="usernameHelp"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label login">
                    Email address
                </label>
                <input
                    type="email"
                    placeholder="Ex.: johndoe@mail.com"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label login">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="Ex.: 123Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label login">
                    Confirm Password
                </label>
                <input
                    type="password"
                    placeholder="Ex.: 123Password"
                    className="form-control"
                    id="exampleInputPassword2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
