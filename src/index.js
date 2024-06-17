import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import Favorites from "./pages/Favorites";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <h1>404 Not Found</h1>,
//   },
//   {
//     path: "/favorites",
//     element: <Favorites />,
//     errorElement: <h1>Error</h1>,
//   },
// ]);
// root.render(<RouterProvider router={router} />);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

