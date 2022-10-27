import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Context } from "./store/appContext.jsx";
import { Home } from "./pages/home.jsx";
import { Login } from "./pages/login.jsx";
import { DetailSpace } from "./pages/detailView.jsx";
import { Demo } from "./pages/demo.jsx";
import { Single } from "./pages/single.jsx";
import { Catalogo } from "./pages/catalogo.jsx";
import { Postspace } from "./pages/postspace.jsx";
import { Postreview } from "./pages/postreview.jsx";
import injectContext from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  const protectedRoute = (route) => (!store.auth ? "" : route);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Login />} path="/login" />
            {protectedRoute(
              <Route element={<Postspace />} path="/postspace" />
            )}
            {protectedRoute(
              <Route element={<Postreview />} path="/postreview" />
            )}

            <Route element={<DetailSpace />} exact path="/detail/:theid" />
            <Route element={<Catalogo />} path="/catalogo" />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} path="*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
