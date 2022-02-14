import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/a-propos" element={<About />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
