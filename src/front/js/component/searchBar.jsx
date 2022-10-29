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
      <h1>Find the best spaces</h1>
      <div class="search-box">
        <button class="btn-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};
