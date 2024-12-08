import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

import "animate.css";

import {
  data,
  NavLink,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";

const SinglePages = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const loaderData = useLoaderData();

  const params = useParams();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-server-eight.vercel.app/AllMovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your movie has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  const handleFavorite = () => {
    fetch(`https://movie-server-eight.vercel.app/favorite`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        movie: loaderData, // movie data
        userEmail: "user@example.com", // pass the user's email or ID
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          Swal.fire({
            text: "This Movie already exists favorites list",
            icon: "warning",
            confirmButtonText: "Close",
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: "Movie added to favorites successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <section className="mt-28 relative">
      <Helmet>
        <title>EcoVenture | All-Movies</title>
      </Helmet>
      <div className="w-[90%] lg:w-1/2 mx-auto">
        <div className="card group hover:shadow h-full p-8 rounded-3xl">
          <figure>
            <img
              src={loaderData.poster}
              alt="Movies"
              className="rounded-3xl transition-transform duration-1000 group-hover:scale-110 w-fit"
            />
          </figure>
          <div className="card-body gap-7">
            <p>Title: {loaderData.title}</p>
            <p>Release Year: {loaderData.year}</p>
            <p>Duration: {loaderData.runtime}</p>
            <p>Genre: {loaderData.genres}</p>
            <p>Country: {loaderData.countries}</p>
            <p> Description: {loaderData.fullplot}</p>
            <p>Language: {loaderData?.languages || "Data not available"}</p>
            <p>Cast: {loaderData.cast}</p>
            <p>Directors: {loaderData.directors}</p>
            <p>Type: {loaderData.type}</p>
            <p>Writers: {loaderData.writers}</p>

            <Rating></Rating>
          </div>
          <div className="flex justify-center loaderDatas-center mt-5 mb-5">
            <div className="card-actions justify-center loaderDatas-center gap-7">
              <NavLink
                to={`update`}
                className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
              >
                Update
              </NavLink>
              <NavLink
                onClick={() => handleDelete(params.id)}
                className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-red-500 text-lg font-semibold text-white border-none hover:bg-red-700"
              >
                Delete
              </NavLink>
              <NavLink
                onClick={() => handleFavorite(params.id)}
                className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-yellow-500 text-lg font-semibold text-white border-none hover:bg-yellow-700"
              >
                Add to favorite
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePages;
