import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/ContextProvider";
import { data, NavLink, useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const FavMovie = () => {
  const { favMovies, myRef } = useContext(AuthContext);
  
  const handleDelete = (id) => {
    fetch(`https://movie-server-eight.vercel.app/deletefavorite`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0){
          Swal.fire({
            title: "Success!",
            text: "Successfully deleted from favorite lists",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div id="fav" ref={myRef} className="mt-28">
      <Helmet>
        <title>EcoVenture | Favorites</title>
      </Helmet>

      <div className="grid grid-rows-1 xl:grid-cols-3 gap-12 md:mt-0 mb-5 md:mb-12 p-10 lg:p-15 xl:p-0 container mx-auto">
        {favMovies.map((item) => (
          <section key={item.movie._id} className="">
            <div className="">
              <div className="card group hover:shadow h-full p-8 rounded-3xl">
                <figure>
                  <img
                    src={item.movie.poster}
                    alt="Movies"
                    className="rounded-3xl transition-transform duration-1000 group-hover:scale-110 w-fit"
                  />
                </figure>
                <div className="card-body gap-7">
                  <p>Title: {item.movie.title}</p>
                  <p>Release Year: {item.movie.year}</p>
                  <p>Duration: {item.movie.runtime}</p>
                  <p>Genre: {item.movie.genres}</p>
                  <p>Country: {item.movie.countries}</p>
                  <p> Description: {item.movie.fullplot}</p>
                  <p>
                    Language: {item.movie?.languages || "Data not available"}
                  </p>
                  <p>Cast: {item.movie.cast}</p>
                  <p>Directors: {item.movie.directors}</p>
                  <p>Type: {item.movie.type}</p>
                  <p>Writers: {item.movie.writers}</p>

                  <Rating></Rating>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <NavLink
                    to={`/movies/${item.movie._id}/update`}
                    className="btn hover:scale-110 ease-in-out	duration-300 h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                  >
                    Update
                  </NavLink>
                  <NavLink
                    to={`/movies/${item.movie._id}`}
                    className="btn hover:scale-110 ease-in-out	duration-300 h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                  >
                    View More
                  </NavLink>
                  <NavLink
                    onClick={() => handleDelete(item)}
                    className="btn col-span-2 hover:scale-110 ease-in-out	duration-300 h-14 bg-red-500 text-lg font-semibold text-white border-none hover:bg-red-700"
                  >
                    Delete favorite
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FavMovie;
