import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "../Pages/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/HOme/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
      
        index: true,
        path:"/",
        Component:Home

    }
  ]
  },
]);
