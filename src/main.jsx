import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Adventure from "./components/MovieCard/MovieCard";

import About from "./components/About/About";
import Contact from "./components/About/Contact";
import PrivateRoute from "./components/Private/PrivateRoute";
import Dashboard from "./components/Private/Page/Dashboard/Dashboard";
import ContextProvider from "./components/Context/ContextProvider";
import Login from "./components/Private/Login";
import Register from "./components/Private/Register";
import SinglePages from "./components/MovieCard/SinglePages";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "flyonui/flyonui"
import Money from "./components/Private/Page/Dashboard/DashboardPages/Money";
import Settings from "./components/Private/Page/Dashboard/DashboardPages/Settings";
import Profile from "./components/Private/Page/Dashboard/DashboardPages/Profile";
import AddMovie from "./components/Private/Page/Dashboard/AddMovie";
import Update from "./components/Private/Page/Dashboard/Update";
import FavMovie from "./components/Private/FavMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Navigate to={'/'}></Navigate>,
      },
      {
        path: "allMovies",
        element: <Adventure></Adventure>,
      },
      {
        path: "movies/:id",
        element: <SinglePages></SinglePages>,
        loader: ({params}) => fetch(`https://movie-server-eight.vercel.app//${params.id}`)
      },
      {
        path: "movies/:id/update",
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: "addMovie",
        element : <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
      },
      {
        path: "/favoriteMovie",
        element : <PrivateRoute><FavMovie></FavMovie></PrivateRoute>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children:[
          {
            path:"/dashboard/billing",
            element:<PrivateRoute><Money></Money> </PrivateRoute>
          },
          {
            path:"/dashboard/profile",
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
          },
          {
            path:"/dashboard/setting",
            element:<PrivateRoute><Settings></Settings></PrivateRoute>
          }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </HelmetProvider>
  </StrictMode>
);
