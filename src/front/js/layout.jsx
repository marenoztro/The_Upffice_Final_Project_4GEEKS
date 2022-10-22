import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home.jsx";
import { Login } from "./pages/login.jsx";
import { DetailView } from "./pages/detailView.jsx";
import { Demo } from "./pages/demo.jsx";
import { Single } from "./pages/single.jsx";
import { Catalogo } from "./pages/catalogo.jsx";
import { Postspace } from "./pages/postspace.jsx";
import { Postreview } from "./pages/postreview.jsx";
import injectContext from "./store/appContext.jsx";

import Navbar from "./component/navbar.jsx";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            <Route element={<DetailView />} path="/detalle" />
            <Route element={<Catalogo />} path="/catalogo" />
            <Route element={<Postspace />} path="/postspace" />
            <Route element={<Postreview />} path="/postreview" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
