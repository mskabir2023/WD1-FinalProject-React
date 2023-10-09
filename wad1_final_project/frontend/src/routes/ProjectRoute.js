import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoot from "../components/AuthenticatedRoot";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <AuthenticatedRoot />
        </>
      ),
      errorElement: (
        <>
          <Navbar />
          <ErrorPage />
        </>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "add",
          element: <AddProduct />,
        },
        {
          path: "edit/:productId",
          element: <EditProduct />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: "/error",
      element: (
        <>
          <Navbar />
          <ErrorPage />
        </>
      ),
    },
  ]);

export default createRouter;
