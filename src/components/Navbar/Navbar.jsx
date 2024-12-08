import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/map.png";
import avatarLogo from "../../assets/face.gif";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import toast from "react-hot-toast";
import "flyonui/flyonui";

const Navbar = () => {
  const { signOutUser, user } = useContext(AuthContext);
  const { myRef } = useContext(AuthContext);

  const handleSignOutUser = () => {
    signOutUser()
      .then(() => {
        if (user) {
          toast.success("Signed Out Successfully");
        }
      })
      .catch(() => {
        toast.error("Please Try Again");
      });
  };

  const [scrolling, setScrolling] = useState(false);
  const [scrolling2, setScrolling2] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setScrolling(true);
      setScrolling2(true);
    } else {
      setScrolling(false);
      setScrolling2(false);
    }
  };

  const navMenu = (
    <>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={
            scrolling2
              ? "dropdown-item  text-base-content/90 focus:bg-gray-300"
              : "dropdown-item  lg:text-white focus:bg-gray-300"
          }
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={
            scrolling2
              ? "text-base-content/90 focus:bg-gray-300 dropdown-item "
              : "dropdown-item  lg:text-white focus:bg-gray-300"
          }
          to="allMovies"
        >
          All Movies
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={
            scrolling2
              ? "text-base-content/90 focus:bg-gray-300 dropdown-item "
              : "lg:text-white focus:bg-gray-300 dropdown-item "
          }
          to={`${user ? 'addMovie': '/login'}`}
        >
          Add-Movies
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={
            scrolling2
              ? "text-base-content/90 focus:bg-gray-300 dropdown-item "
              : "lg:text-white focus:bg-gray-300 dropdown-item "
          }
          to={`${user ? 'favoriteMovie': '/login'}`}
        >
          Favorite
        </Link>
      </li>
      <li>
        <Link
          onClick={() =>
            myRef.current?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className={
            scrolling2
              ? "text-base-content/90 focus:bg-gray-300 dropdown-item "
              : "lg:text-white focus:bg-gray-300 dropdown-item "
          }
          to="contact"
        >
          Contact
        </Link>
      </li>
    </>
  );

  const buttonLink = (
    <>
      <Link
        onClick={() =>
          myRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
        to="login"
        className="btn bg-[#4CAF50] w-1/2 lg:w-auto text-lg font-semibold text-white border-none hover:bg-[#2E7D32] hover:scale-110 ease-in-out	duration-300"
      >
        Login
      </Link>
    </>
  );

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch("https://movie-server-eight.vercel.app/allMovies")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (item) =>
            value && item.title && item.title.toLowerCase().includes(value)
        );
        setResults(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
      <nav
        className={
          scrolling
            ? "bg-white fixed top-0 z-50 w-screen transition-all duration-500 navbar justify-between gap-5 lg:gap-0"
            : "w-screen bg-black fixed top-0 z-50 transition-all duration-500 navbar justify-between gap-5 lg:gap-0"
        }
      >
        <div className="dropdown relative inline-flex lg:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span
              className={
                scrolling
                  ? "icon-[tabler--menu-2] dropdown-open:hidden size-7"
                  : "icon-[tabler--menu-2] dropdown-open:hidden text-white size-7"
              }
            ></span>
            <span
              className={
                scrolling
                  ? "icon-[tabler--x] dropdown-open:block hidden size-7"
                  : "icon-[tabler--x] dropdown-open:block hidden text-white size-7"
              }
            ></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 border-2 border-black "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            {navMenu}
            {buttonLink}
          </ul>
        </div>
        <div class="navbar-end lg:navbar-start items-center gap-1">
          <a href="/">
            <img className="w-15 md:w-16" src={logo} alt="" />
          </a>
          <a
            className={
              scrolling2
                ? "text-base-content/90 focus:bg-gray-300 link-neutral text-lg font-semibold no-underline"
                : "text-white focus:bg-gray-300 link-neutral text-lg font-semibold no-underline"
            }
            href="/"
          >
            CineVault
          </a>
        </div>
        <div className="navbar-center max-lg:hidden">
          <ul className="menu menu-horizontal p-0 font-medium text-lg xl:text-xl bg-inherit">
            {navMenu}
          </ul>
        </div>
        <div class="navbar-end flex items-center gap-1 w-fit lg:w-1/2">
          <label class="input-group max-w-56 rounded-full sm:flex relative">
            <span class="input-group-text">
              <span class="icon-[tabler--search] text-base-content/80 size-5"></span>
            </span>
            <input
              type="search"
              class="input grow rounded-e-full"
              placeholder="Search"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </label>
          <div
            className={`${
              input &&
              "border-2 absolute right-32 top-16 text-gray-600 rounded px-5 py-2 overflow-y-scroll bg-white"
            }`}
          >
            {results.map((item) => (
              <ul>
                <li>
                  <a href="">{item.title}</a>
                </li>
              </ul>
            ))}
          </div>
          <div className="hidden lg:block lg:w-fit">{buttonLink}</div>
          <div className="dropdown inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
            <button
              id="dropdown-scrollable"
              type="button"
              className="dropdown-toggle flex items-center"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <div className="avatar">
                <div
                  className={
                    scrolling
                      ? `size-11 md:size-12 border-2 border-black ${
                          user ? "p-0" : "p-2"
                        } rounded-full`
                      : `size-11 md:size-12 border-2 border-white ${
                          user ? "p-0" : "p-2"
                        } rounded-full`
                  }
                >
                  <img
                    src={user?.photoURL || avatarLogo}
                    className={""}
                    alt="avatar 1"
                  />
                </div>
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52 border-2 border-black"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-avatar"
            >
              <li className="dropdown-header gap-3 border-0 pt-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
                  </div>
                </div>
                <div>
                  <h6 className="text-base-content/90 text-base font-semibold">
                    {" "}
                    {user?.displayName || "John Doe"}
                  </h6>
                  <small className="text-base-content/50">
                    {" "}
                    {user?.email || "example@gmail.com"}
                  </small>
                </div>
              </li>
              <li>
                <hr className="border-base-content/25 -mx-2 mb-3" />
              </li>
              <li>
                <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="dashboard/profile"
                >
                  <span className="icon-[tabler--user]"></span>
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="/dashboard/setting"
                >
                  <span className="icon-[tabler--settings]"></span>
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  onClick={() =>
                    myRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="dropdown-item"
                  to="/dashboard/billing"
                >
                  <span className="icon-[tabler--settings]"></span>
                  Billings
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <span className="icon-[tabler--help-triangle]"></span>
                  FAQs
                </a>
              </li>
              <li className="dropdown-footer gap-2">
                <Link
                  onClick={handleSignOutUser}
                  className="btn btn-error btn-soft btn-block"
                  href="#"
                >
                  <span className="icon-[tabler--logout]"></span>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    // <section className={scrolling ? "bg-white fixed top-0 z-50 w-screen transition-all duration-500" : "w-screen bg-black fixed top-0 z-50 transition-all duration-500"}>
    //   <nav
    //     id="navbar"
    //     className={
    //       scrolling
    //         ? "p-[1.3rem] xl:p-[2rem] navbar justify-between left-0 right-0 w-full shadow mx-auto bg-inherit"
    //         : "p-[1.3rem] xl:p-[2rem] navbar justify-between left-0 right-0 w-full mx-auto bg-inherit"
    //     }
    //   >
    //     <div className="navbar-start justify-between items-center w-[70%] md:w-[60%] lg:w-[45%] xl:w-1/2">
    //       <div className="dropdown relative inline-flex lg:hidden rtl:[--placement:bottom-end]">
    //         <button
    //           id="dropdown-default"
    //           type="button"
    //           className="dropdown-toggle btn btn-text btn-secondary btn-square"
    //           aria-haspopup="menu"
    //           aria-expanded="false"
    //           aria-label="Dropdown"
    //         >
    //           <span
    //             className={
    //               scrolling
    //                 ? "icon-[tabler--menu-2] dropdown-open:hidden size-7"
    //                 : "icon-[tabler--menu-2] dropdown-open:hidden text-white size-7"
    //             }
    //           ></span>
    //           <span
    //             className={
    //               scrolling
    //                 ? "icon-[tabler--x] dropdown-open:block hidden size-7"
    //                 : "icon-[tabler--x] dropdown-open:block hidden text-white size-7"
    //             }
    //           ></span>
    //         </button>
    //         <ul
    //           className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 border-2 border-black "
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="dropdown-default"
    //         >
    //           {navMenu}
    //         </ul>
    //       </div>
    //       <div className="flex flex-row justify-center items-center gap-2 md:gap-5">
    //         <a href="/">
    //           <img className="w-15 md:w-16" src={logo} alt="" />
    //         </a>
    //         <a
    //           className={
    //             scrolling2
    //               ? "text-base-content/90 focus:bg-gray-300 link-neutral text-lg font-semibold no-underline"
    //               : "text-white focus:bg-gray-300 link-neutral text-lg font-semibold no-underline"
    //           }
    //           href="/"
    //         >
    //           CineVault
    //         </a>
    //       </div>
    //     </div>
    //     <div className="navbar-center max-lg:hidden">
    //       <ul className="menu menu-horizontal p-0 font-medium text-lg xl:text-xl bg-inherit">
    //         {navMenu}
    //       </ul>
    //     </div>
    //     <div className="navbar-end items-center gap-4 w-fit lg:w-1/2">
    //     {buttonLink}
    //       <div className="dropdown inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
    //         <button
    //           id="dropdown-scrollable"
    //           type="button"
    //           className="dropdown-toggle flex items-center"
    //           aria-haspopup="menu"
    //           aria-expanded="false"
    //           aria-label="Dropdown"
    //         >
    //           <div className="avatar">
    //             <div
    //               className={
    //                 scrolling
    //                   ? `size-12 border-2 border-black ${
    //                       user ? "p-0" : "p-2"
    //                     } rounded-full`
    //                   : `size-12 border-2 border-white ${
    //                       user ? "p-0" : "p-2"
    //                     } rounded-full`
    //               }
    //             >
    //               <img
    //                 src={user?.photoURL || avatarLogo}
    //                 className={""}
    //                 alt="avatar 1"
    //               />
    //             </div>
    //           </div>
    //         </button>
    //         <ul
    //           className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52 border-2 border-black"
    //           role="menu"
    //           aria-orientation="vertical"
    //           aria-labelledby="dropdown-avatar"
    //         >
    //           <li className="dropdown-header gap-3 border-0 pt-3">
    //             <div className="avatar">
    //               <div className="w-10 rounded-full">
    //                 <img src={user?.photoURL || avatarLogo} alt="avatar 1" />
    //               </div>
    //             </div>
    //             <div>
    //               <h6 className="text-base-content/90 text-base font-semibold">
    //                 {" "}
    //                 {user?.displayName || "John Doe"}
    //               </h6>
    //               <small className="text-base-content/50">
    //                 {" "}
    //                 {user?.email || "example@gmail.com"}
    //               </small>
    //             </div>
    //           </li>
    //           <li>
    //             <hr className="border-base-content/25 -mx-2 mb-3" />
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="dashboard/profile"
    //             >
    //               <span className="icon-[tabler--user]"></span>
    //               My Profile
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="/dashboard/setting"
    //             >
    //               <span className="icon-[tabler--settings]"></span>
    //               Settings
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               onClick={() =>
    //                 myRef.current?.scrollIntoView({
    //                   behavior: "smooth",
    //                 })
    //               }
    //               className="dropdown-item"
    //               to="/dashboard/billing"
    //             >
    //               <span className="icon-[tabler--settings]"></span>
    //               Billings
    //             </Link>
    //           </li>
    //           <li>
    //             <a className="dropdown-item" href="#">
    //               <span className="icon-[tabler--help-triangle]"></span>
    //               FAQs
    //             </a>
    //           </li>
    //           <li className="dropdown-footer gap-2">
    //             <Link
    //               onClick={handleSignOutUser}
    //               className="btn btn-error btn-soft btn-block"
    //               href="#"
    //             >
    //               <span className="icon-[tabler--logout]"></span>
    //               Sign out
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </section>
  );
};

export default Navbar;
