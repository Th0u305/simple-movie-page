import Footer from "../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carrousel from "../Home/Carrousel";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import "flyonui/flyonui";
import { AuthContext } from "../Context/ContextProvider";
import CursorComponent from "./Cursor";

const Root = () => {
  const { pathname, state } = useLocation();
  const [views, setViews] = useState(true);
  const {setLoading, user, setViewWallet, setVieProfile, setViewSetting } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, [pathname]);

  useEffect(() => {
    sessionStorage.setItem("prevLocation", pathname);
    // console.log(pathname);

    if (
      pathname === "/dashboard" ||
      pathname === "/login" ||
      pathname === "/register"
    ) {
      setViews(false);
    } else {
      setViews(true);
    }

    if (pathname === "/dashboard/profile") {
      setViewWallet(false);
      setVieProfile(true);
      setViewSetting(false);
    }

    if (pathname === "/dashboard/billing") {
      setViewWallet(true);
      setVieProfile(false);
      setViewSetting(false);
    }
    if (pathname === "/dashboard/setting") {
      setViewWallet(false);
      setVieProfile(false);
      setViewSetting(true);
    }
  }, [pathname]);

  return (
    <div className=" ">
      <Helmet>
        <title>EcoVenture | Home</title>
      </Helmet>
      <Toaster />
      {/* <CursorComponent></CursorComponent> */}
      <Navbar></Navbar>
      {views && <Carrousel></Carrousel>}
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
