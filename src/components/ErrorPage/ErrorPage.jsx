import React from "react";
import "./error.css";
import { NavLink } from "react-router-dom";
import errorPic from "../../assets/404.png";

const ErrorPage = () => {

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] md:flex-row md:gap-0">
      <div className="error flex flex-col justify-center items-center text-center gap-8 md:text-left md:items-start 
                      p-5 md:p-0 md:w-[40%] lg:w-[45%] xl:w-[35%] 2xl:w-[25%]">
        <h1 className="text-5xl font-semibold">Uh Ohh!</h1>
        <p className="text-xl">We couldn't find the page that you're looking for :(</p>
        <div className="cta">
          <NavLink to="/" 
                  className="btn btn-lg bg-[#9538E2] rounded-full text-white outline-none hover:outline-none w-[12em] 
                            transition-all duration-300 ease-in-out hover:scale-105
                            hover:text-black hover:border-2 hover:border-[#9538E2]">
                  Home
          </NavLink>
        </div>
      </div>
      <img src={errorPic} alt="home image" className="hero-img w-[80%] md:w-1/2 lg:w-[40%] xl:w-[30%]" />
    </section>
  );
};

export default ErrorPage;
