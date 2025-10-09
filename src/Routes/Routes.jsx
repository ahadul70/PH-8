import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Root from "../Pages/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/HOme/Home";
import { All_appps } from "../Pages/Apps/All_appps";
import { App_dets } from "../Pages/App_dets/App_dets";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: All_appps,
      },
      {
        path: "/installed",
      },
      {
        path: '/app/:id',
        Component: App_dets,

      }
    ],
  },
]);
