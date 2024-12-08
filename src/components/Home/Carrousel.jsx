import React from "react";
import { FaPlay } from "react-icons/fa";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/8.jpg";
import pic4 from "../../assets/3.jpg";
import pic5 from "../../assets/pic3.jpg";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { NavLink } from "react-router-dom";

const Carrousel = () => {
  const {user, movies } = useContext(AuthContext);

  return (
    <div
      id="carousel-7"
      data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 4000 }'
      className=" w-full h-max md:h-96 lg:h-[30rem] xl:h-[57rem] relative bg-[#0000002f] mt-20 xl:mt-0"
    >
      <div class="carousel h-full rounded-none ">
        <div className="container_mouse absolute z-20 left-0 right-0 mx-auto bottom-5 lg:bottom-12 w-fit "></div>
        <div className="carousel-body opacity-0">
          <div className="relative">
            <img
              src={pic1}
              className="object-cover carousel-slide brightness-50"
              alt="..."
            />
            <div className="absolute z-50 top-[25%] md:top-[50%] xl:top-[65%] left-5 lg:left-16 space-y-3">
              <h1 className="text-4xl text-base-200">Gertie the Dinosaur</h1>
              <div className="flex gap-7 items-center text-base-300">
                <p>Duration: 12min</p>
                <p>IMDB: 7.3</p>
                <p>Genre: Short Animation & Comedy</p>
              </div>
              <p className="text-base-200 w-[80%] hidden lg:block">The cartoonist, Winsor McCay, brings the Dinosaurus back to life in the figure of his latest creation, Gertie the Dinosaur.</p>
              <button
                    
                  className="btn hover:scale-110 ease-in-out	duration-300 rounded-full md:h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                >
                  <FaPlay />  View Details
                </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={pic2}
              className="object-cover carousel-slide brightness-50"
              alt="..."
            />
            <div className="absolute z-50 top-[20%] md:top-[50%] xl:top-[65%] left-5 lg:left-16 space-y-3">
              <h1 className="text-4xl text-base-200">In the Land of the Head Hunters</h1>
              <div className="flex gap-7 items-center text-base-300">
                <p>Duration: 65min</p>
                <p>IMDB: 5.8</p>
                <p>Genre: Drama & History</p>
              </div>
              <p className="text-base-200 w-[80%] hidden lg:block">Original advertising for the film describes it as a drama of primitive life on the shores of the North Pacific...</p>
              <button
                  className="btn hover:scale-110 ease-in-out	duration-300 rounded-full md:h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                >
                  <FaPlay />  View Details
                </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={pic3}
              className="object-cover carousel-slide brightness-50"
              alt="..."
            />
            <div className="absolute z-50 top-[20%] md:top-[50%] xl:top-[65%] left-5 lg:left-16 space-y-3">
              <h1 className="text-4xl text-base-200 lg:w-1/2">Winsor McCay, the Famous Cartoonist</h1>
              <div className="flex gap-7 items-center text-base-300">
                <p>Duration: 7min</p>
                <p>IMDB: 7.3</p>
                <p>Genre: Short Animation & Comedy</p>
              </div>
              <p className="text-base-200 w-[80%] hidden lg:block">Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.</p>
              <button
                  className="btn hover:scale-110 ease-in-out	duration-300 rounded-full md:h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                >
                  <FaPlay />  View Details
                </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={pic4}
              className="object-cover carousel-slide brightness-50"
              alt="..."
            />
            <div className="absolute z-50 top-[35%] md:top-[50%] xl:top-[65%] left-5 lg:left-16 space-y-3">
              <h1 className="text-4xl text-base-200">The Blue Bird</h1>
              <div className="flex gap-7 items-center text-base-300">
                <p>Duration: 75min</p>
                <p>IMDB: 6.6</p>
                <p>Genre: Fantasy</p>
              </div>
              <p className="text-base-200 w-[80%] hidden lg:block">Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...</p>
              <button
                  className="btn hover:scale-110 ease-in-out	duration-300 rounded-full lg:h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                >
                  <FaPlay />  View Details
                </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={pic5}
              className="object-cover carousel-slide brightness-50"
              alt="..."
            />
            <div className="absolute z-50 top-[35%] md:top-[50%] xl:top-[65%] left-5 lg:left-16 space-y-3">
              <h1 className="text-4xl text-base-200">Regeneration</h1>
              <div className="flex gap-7 items-center text-base-300">
                <p>Duration: 72min</p>
                <p>IMDB: 6.8</p>
                <p>Genre: Biography, crime & Drama</p>
              </div>
              <p className="text-base-200 w-[80%] hidden lg:block">At 10 years old, Owens becomes a ragged orphan when his sainted mother dies. The Conways, who are next door neighbors, take Owen in, but the constant drinking by Jim soon puts Owen on the ...</p>
              <NavLink
                  className="btn hover:scale-110 ease-in-out	duration-300 rounded-full md:h-14 bg-[#4CAF50] text-lg font-semibold text-white border-none hover:bg-[#2E7D32]"
                >
                  <FaPlay />  View Details
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
