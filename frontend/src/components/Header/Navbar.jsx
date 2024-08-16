import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import pLogo from "../../assets/images/pLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMessage } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  
  return (
    <header className="w-[100%] bg-white sticky top-0 left-0 ">
      <nav className=" p-3 border-b-[1px] w-[100%]">
        <div className=" flex flex-row justify-between items-center w-[100%]">
          {/* Mobile Menu button  */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}  className="text-[1.2rem]">&#9776;</button>
          </div>
          {/* logo */}
          <Link to="/" className=" flex items-center">
            <img src={pLogo} alt="this is a logo" className=" w-25 h-12" />
          </Link>
          {/* navlist */}
          <div className=" hidden justify-between items-center w-full lg:flex  lg:w-auto ">
            <ul className=" flex flex-col lg:flex-row lg:space-x-4">
              <li>
                <NavLink
                  to="/find"
                  className={({ isActive }) =>
                    ` text-[1rem]  font-semibold px-3 py-3  hover:text-secondary-500
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
                  }
                >
                  Find Painters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` text-[1rem]  font-semibold px-3 py-3  hover:text-secondary-500
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
                  }
                >
                  Get Inspired
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/professional"
                  className={({ isActive }) =>
                    `text-[1rem]  font-semibold px-3 py-3  hover:text-secondary-500
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
                  }
                >
                  Become Professional
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-[1rem]  font-semibold px-3 py-3  hover:text-secondary-500
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* search bar here */}
          <SearchBar/>
          {/* search button for mobile nav */}
          <button className=" text-[1.2rem] py-2 px-3 text-gray-600  lg:hidden">
            <FontAwesomeIcon icon={faSearch}/>
          </button>

          <div className=" flex flex-row  justify-between items-center gap-2 w-auto">
            <Link
              to="/login"
              className=" text-[1rem]  font-semibold px-4 py-1 border-0 rounded-lg hover:bg-primary-50 hidden lg:block"
            >
              Login
            </Link>
            <Link
              to="/"
              className=" text-[1rem] text-primary-500 font-semibold px-4 py-1  border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white"
            >
              SignUp
            </Link>
          </div>
        </div>
      </nav>

      {/* sidebar mobile menu ................. */}
      <div className={` ${isOpen ? "flex" : "hidden"} w-full h-full lg:hidden bg-black/50 backdrop-blur-sm  fixed top-0 left-0 `}>
        <div
        className={`
            flex flex-col gap-3 px-3 py-5 w-[60%]  h-full translate-x -left-100  absolute top-0 left-0  bg-blend-overlay bg-white border-[1px]  lg:hidden`}
        >
        {/* Mobile Menu button  */}
        <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
          </div>
        {/* mobile menu nav start */}
        <ul className=" flex flex-col w-full items-start ">
            <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200">
            <NavLink
                to="/find"
                className={({ isActive }) =>
                ` text-[1rem]  font-semibold   
                ${isActive? "text-secondary-500 ": " text-black "} `}
            >
              Find Painters
            </NavLink>
          </li>
          <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` text-[1rem]  font-semibold 
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
              }
            >
              Get Inspired
            </NavLink>
          </li>
          <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200">
            <NavLink
              to="/professional"
              className={({ isActive }) =>
                `text-[1rem]  font-semibold  
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
              }
            >
              become painter
            </NavLink>
          </li>
          <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200 ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[1rem]  font-semibold   
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <hr />
        <div>
            <Link
              to="#"
              className=" text-[1rem]  font-semibold px-4 py-2 border-0 rounded-lg hover:bg-gray-200"
            >
              Login
            </Link>
        </div>
      </div>
      </div>
      {/* sidebar mobile menu end......... */}
    </header>
  );
}

export default Navbar;
