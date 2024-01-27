import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./mediaQueries.css";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import CarDetails from "./pages/CarDetails.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Reviews from "./pages/Reviews.jsx";
import Header from "./components/Header.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/car-models",
        element: <CarDetails />,
      },
      {
        path: "/testimonials",
        element: <Reviews />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
