import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../Context/ContextProvider";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Rating } from "react-simple-star-rating";
AOS.init();
const Home = () => {
  const {loading, setLoading, user, movies, myRef } = useContext(AuthContext);
  const [sliceData, setSlicedData] = useState([]);

  useEffect(() => {
    setLoading(true)
    setSlicedData(movies.sort(() => Math.random() - 0.5).slice(0, 8));
  }, [movies]);

  return (
    <div className=" mt-12 md:mt-28" id="home" ref={myRef}>
      <Helmet>
        <title>EcoVenture | Home</title>
      </Helmet>
      <div className="p-5">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center">
          Explore the World of Cinema
        </h1>
        <p className=" text-lg lg:text-xl text-center p-10">
          "Dive into an ever-growing library of movies from all genres and eras.
          Whether you're a fan of action-packed thrillers, heartfelt dramas, or
          quirky comedies, there's something here for everyone."
        </p>
      </div>

      {
        loading && <div className="grid grid-rows-1 xl:grid-cols-3 gap-12 md:mt-0 mb-5 md:mb-12 p-10 lg:p-15 xl:p-0">
        {sliceData.map((item) => (
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
                <p>Title: {item.title}</p>
                <p>Release Year: {item.year}</p>
                <p>Duration: {item.runtime}</p>
                <p>Genre: {item.genres}</p>
                <p> Description: {item.fullplot}</p>
                <p>Language: {item?.languages || "Data not available"}</p>

                <Rating></Rating>

              </div>
              <div className="flex justify-center items-center mt-5 mb-5">
                <div className="card-actions justify-center items-center5">
                  <NavLink
                    to={user ? `movies/${item._id}` : "/login"}
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
      }
      
      <div className="flex justify-center items-center mb-12 ">
        <NavLink
          to="allMovies"
          className="btn hover:scale-110 ease-in-out	duration-300 w-[15em] h-16 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
