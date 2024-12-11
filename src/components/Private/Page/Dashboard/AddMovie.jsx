import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating'

const AddMovie = () => {
  const handleAddMovie = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const poster = form.poster.value;
    const countries = form.countries.value;
    const year = form.year.value;
    const genres = form.genres.value;
    const rating = form.rating.value;
    const fullplot = form.fullplot.value;
    const runtime = form.runtime.value;

    const addedMovie = {
      title,
      poster,
      countries,
      year,
      genres,
      rating,
      fullplot,
      runtime,
    };

    fetch("https://movie-server-eight.vercel.app/AddMovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedMovie),
    })
      .then((res) => res.json())
      .then((data) => {if (data.insertedId){
        Swal.fire({
          title:"Success!",
          text: "Movie added successfully",
          icon : 'success',
          confirmButtonText: 'Cool'
      })
      e.target.reset();
      } {
        
      }});
  };
  return (
    <div>
      <Helmet>
        <title>EcoVenture | AddMovies</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-900 mt-12 shadow rounded-3xl lg:mt-28 w-[90%] mx-auto">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add Movie
          </h2>
          <form action="#" onSubmit={handleAddMovie}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type Movie name"
                  required
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Movie Picture
                </label>
                <input
                  type="text"
                  name="poster"
                  id="url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Picture url"
                  required
                ></input>
              </div>
              <div className="w-full">
                <label
                  for="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  name="countries"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Country name"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                required
                  name="type"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value=""></option>
                  <option value="TV">Tv-Series</option>
                  <option value="PC">Movie</option>
                </select>
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Released Year
                </label>
                <select
                required
                  name="year"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="TV"></option>
                  <option value="PC">40000</option>
                  <option value="GA">2023</option>
                  <option value="PH">9056</option>
                  <option value="ID">1020</option>
                </select>
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Genre
                </label>
                <select
                required
                  name="genres"
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value=""></option>
                  <option value="">Horror</option>
                  <option value="TV">Drama</option>
                  <option value="PC">Romantic</option>
                  <option value="GA">Comedy</option>
                  <option value="PH">Actions</option>
                  <option value="ID">Biography</option>
                </select>
              </div>
              <div>
                <label
                  for="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Duration
                </label>
                <input
                  type="number"
                  name="runtime"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Ex. 12"
                  required
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
      <Rating></Rating>

                <input
                  type="number"
                  name="rating"
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Rating number"
                  required
                ></input>
              </div>
              <div className="sm:col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="fullplot"
                  rows="8"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write a movie description here..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="flex items-center space-x-4">
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
