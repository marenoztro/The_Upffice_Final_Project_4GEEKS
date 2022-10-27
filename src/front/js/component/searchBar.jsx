import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.jsx";

import { Link } from "react-router-dom";

export const Searchbar = () => {
  const { store, actions } = useContext(Context);
  const [search, setSearch] = useState("");
  let results = [];
  if (!search) {
    results;
  }

  const handleSearch = (e) => {
    console.log("Ejecutando");
    setSearch(e.target.value);
    console.log(search);
  };

  return (
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
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
