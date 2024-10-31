import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import pLogo from "../../assets/images/pLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMessage } from "@fortawesome/free-solid-svg-icons";
import {SearchBar , MobileSearchBar} from "../SearchBar";
import {useUser} from "../../utils/UserContext"
import axios from "axios"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked , setClicked] = useState (false)
  const navigate = useNavigate()
  const { user, updateUser } = useUser()
  
  console.log(user)



  if (!user) console.log('not get the user')
  // //extracting user id from user
  const userId = user._id
  // const userId = "hgjghfj"
  
  // console.log(userId)
  

  

  // Handle user logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/logout", {}, { withCredentials: true })
      updateUser(null)
      navigate("/") // Redirect to home after logout
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }
  
  return (
    <header className=" min-w-full bg-white sticky top-0 left-0 font-Montserrat z-50">
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
          <div className=" hidden justify-center  items-center w-full lg:flex  lg:w-auto ">
            <ul className=" flex flex-col lg:flex-row lg:space-x-1">
              <li>
                <NavLink
                  to="/painters"
                  className={({ isActive }) =>
                    ` text-[1rem]  font-semibold px-3 py-3  hover:text-gray-400
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black/65 "
                                    } `
                  }
                >
                  Find Painters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/inspiration"
                  className={({ isActive }) =>
                    ` text-[1rem]  font-semibold px-3 py-3  hover:text-gray-400
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black/65 "
                                    } `
                  }
                >
                  Get Inspired
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    `text-[1rem]  font-semibold px-3 py-3  hover:text-gray-400
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black/65 "
                                    } `
                  }
                >
                  Share work
                </NavLink>
              </li>
              {/*  <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-[1rem]  font-semibold px-3 py-3  hover:text-gray-400
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black/65 "
                                    } `
                  }
                >
                  About Us
                </NavLink> 
              </li> */}
            </ul>
          </div>

          {/* search bar here */}
          <div className=" hidden lg:block">
          <SearchBar/>
          </div>
          {/* search button for mobile nav */}
          <button className=" text-[1.2rem] py-2 px-3 text-gray-600  lg:hidden " onClick={()=> setClicked(!clicked)}>
            <FontAwesomeIcon icon={faSearch}/>
          </button>

          <div className=" flex flex-row  justify-between items-center gap-2 w-auto">
          {user !== null ? (
              <>
                <Link
                  to='/messages'
                  className="text-[1rem] font-semibold px-4 py-1 border-0 rounded-full text-black/65 hover:bg-primary-50 "
                >
                  <FontAwesomeIcon icon={faMessage}/> 
                </Link>
                <Link
                  to={`/profile/${userId}`}
                  className="text-[1rem] font-semibold px-4 py-1 border-0 rounded-lg text-black/65 hover:bg-primary-50 "
                >
                  {user.username || "profile"} 
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-[1rem] text-primary-500 font-semibold px-4 py-1 border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white hidden lg:block"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
            <Link
              to="/login"
              className=" text-[1rem]  font-semibold px-4 py-1 border-0 rounded-lg text-black/65 hover:bg-primary-50 hidden lg:block"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className=" text-[1rem] text-primary-500 font-semibold px-4 py-1  border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white"
            >
              SignUp
            </Link>
            </>
            )
            }
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
                to="/painters"
                className={({ isActive }) =>
                ` text-[1rem]  font-semibold   
                ${isActive? "text-secondary-500 ": " text-black "} `}
            >
              Find Painters
            </NavLink>
          </li>
          <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200">
            <NavLink
              to="/inspiration"
              className={({ isActive }) =>
                ` text-[1rem]  font-semibold 
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
                                    
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Get Inspired
            </NavLink>
          </li>
          <li className=" py-2 px-2 w-full border-0 rounded-md hover:bg-gray-200">
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `text-[1rem]  font-semibold  
                                    ${
                                      isActive
                                        ? "text-secondary-500 "
                                        : " text-black "
                                    } `
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Share work
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
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <hr />
        <div>
        { user!==null ? (
            <Link
              to="/login"
              className=" text-[1rem]  font-semibold px-4 py-2 border-0 rounded-lg hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              Logout
            </Link>
          ):(
            <Link
              to="/login"
              className=" text-[1rem]  font-semibold px-4 py-2 border-0 rounded-lg hover:bg-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              Login
            </Link>
          )
          }
        </div>
      </div>
      </div>
      {/* sidebar mobile menu end......... */}

      {/* Mobile search bar */}
      {/* <div className={` w-full h-full lg:hidden bg-black/50 backdrop-blur-sm  fixed top-0 left-0 ${ onkeydown={hidden} } ` }>
        <div className=" flex flex-col gap-3 px-3 py-5 w-[100%]  h-[200px]  absolute top-0 left-0  bg-blend-overlay bg-white border-[1px]  lg:hidden   "> */}
        {
            (clicked ? <MobileSearchBar/>: null )
          }
        {/* </div>
      </div> */}
    </header>
  );
}

export default Navbar;
