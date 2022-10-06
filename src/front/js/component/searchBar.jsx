import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Searchbar = () => (
  <div>
    <div className="main position-absolute top-40 start-50 translate-middle-x">
      <h1>Find the best spaces</h1>
      <div>
        <input
          style={{ width: "24rem" }}
          type="text"
          id="header-search"
          placeholder="Search spaces"
          name="s"
        />
        {/* <button className="btn btn-primary mx-2">Search Spaces🤍</button> */}
      </div>
    </div>
  </div>
);
