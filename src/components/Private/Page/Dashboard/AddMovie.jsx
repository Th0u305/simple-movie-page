import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";

const AddMovie = () => {
  
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (e) => {
    if (e.rating.length > 2 || e.rating > 10 || e.rating === !Number) {
      return setErrorMsg("please add valid rating number");
    }
    setErrorMsg("");

    const filterEmptyFields = Object.fromEntries(
      Object.entries(e).filter(
        ([_, value]) => value !== "" && value !== undefined
      )
    );

    fetch("https://movie-server-eight.vercel.app/AddMovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filterEmptyFields),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
      reset();
  };
  return (
    <div>
      <Helmet>
        <title>EcoVenture | AddMovies</title>
      </Helmet>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Update Movie
          </h2>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Name
                </label>
                <input
                  type="text"
                  {...register("title")}
                  required
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Movie name"
                ></input>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Picture
                </label>
                <input
                  type="text"
                  required
                  {...register("poster")}
                  id="url"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Picture url"
                ></input>
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                required
                  type="text"
                  {...register("countries")}
                  id="country"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Country name"
                ></input>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                required
                  {...register("type")}
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value=""></option>
                  <option value="Tv-Series">Tv-Series</option>
                  <option value="Movie">Movie</option>
                </select>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Released Year
                </label>
                <select
                required
                  {...register("year")}
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value=""></option>
                  <option value="40000">40000</option>
                  <option value="2023">2023</option>
                  <option value="9056">9056</option>
                  <option value="1020">1020</option>
                </select>
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                required
                  {...register("genres")}
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value=""></option>
                  <option value="Horror">Horror</option>
                  <option value="Drama">Drama</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Actions">Actions</option>
                  <option value="Biography">Biography</option>
                </select>
              </div>
              <div>
                <label
                  for="number"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Duration
                </label>
                <input
                required
                  type="number"
                  {...register("runtime")}
                  id="number"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Ex. 12"
                ></input>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <Rating></Rating>
                <input
                required
                  type="number"
                  {...register("rating")}
                  id="rating"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Rating number"
                ></input>
                <p className="text-red-600">{errorMsg}</p>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                required
                  id="description"
                  {...register("fullplot")}
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a movie description here..."
                ></textarea>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <button
                type="submit"
                className="btn hover:scale-110 ease-in-out	duration-300 btn-wide h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
              >
                Add Movie
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovie;
