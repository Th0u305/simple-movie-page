import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Rating } from "react-simple-star-rating";

const Adventure = () => {
  const { loading, user, movies, myRef } = useContext(AuthContext);

  return (
    <div className="mt-12 xl:mt-28 xl:mb-28 flex flex-col items-center justify-center" id="adventure" ref={myRef}>
      <Helmet>
        <title>EcoVenture | AllMovies</title>
      </Helmet>
      <div className="p-5">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center">
          Start Your Movie Journey
        </h1>
        <p className=" text-lg lg:text-xl text-center p-10">
          Why wait? Join CineVault today and step into a world where every movie
          tells a story, and every story sparks a connection.
        </p>
      </div>
      {movies.length > 0 ? (
        <div className="grid grid-rows-1 xl:grid-cols-3 gap-12 md:mt-0 mb-5 md:mb-12 p-10 lg:p-15 xl:p-0">
          {movies.map((item) => (
            <div key={item._id} className="">
              <div className="card group hover:shadow p-8 rounded-3xl">
                <figure>
                  <img
                    src={item.poster}
                    alt="Movies"
                    className="rounded-3xl transition-transform duration-1000 group-hover:scale-110 w-fit"
                  />
                </figure>
                <div className="card-body gap-7">
                  <p className="break-words text-wrap">Title: {item.title}</p>
                  <p className="break-words text-wrap">Release Year: {item.year}</p>
                  <p className="break-words text-wrap">Duration: {item.runtime}</p>
                  <p className="break-words text-wrap">Genre: {item.genres}</p>
                  <p className="break-words text-wrap">Description: {item.fullplot}</p>
                  <p className="break-words text-wrap">Language: {item?.languages || "Data not available"}</p>
                  <Rating></Rating>
                </div>
                <div className="flex justify-center items-center mt-5 mb-5">
                  <div className="card-actions justify-center items-center5">
                    <NavLink
                      to={user ? `/movies/${item._id}` : "/login"}
                      className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <span class="loading loading-spinner loading-lg mx-auto"></span>
      )}
    </div>
  );
};
export default Adventure;
