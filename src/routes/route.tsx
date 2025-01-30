import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import Component from "../pages/Component";

interface Route {
  path: string;
  element: React.ReactElement;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/component",
    element: <Component />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];


export default routes;