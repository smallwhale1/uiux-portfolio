import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ResponsiveRedesign from "./components/case_studies/ResponsiveRedesign";
import Inspofolio from "./components/case_studies/Inspofolio";
import PlaylistCreator from "./components/case_studies/PlaylistCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/responsiveRedesign",
    element: <ResponsiveRedesign />,
  },
  {
    path: "/inspofolio",
    element: <Inspofolio />,
  },
  {
    path: "/playlistCreator",
    element: <PlaylistCreator />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
