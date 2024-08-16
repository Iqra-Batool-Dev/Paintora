import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";
import  painting from "../../assets/images/painting.png";
import Google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedIn from "../../assets/icons/linkedIn.svg"

function Login() {
  // state for input fields
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //function to handle the inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // function is ended
  return (
    <div className=" w-[100%] h-[100vh] flex flex-col overflow-hidden bg-primary-800 md:rounded-[20px] shadow-xl md:h-[95vh] md:mx-auto md:my-5 md:bg-gray-50 md:w-[60%] md:flex-row ">
      {/* left side panel */}
      <SidePanel />

      {/* right side form */}
      <div className=" w-full  p-10 flex flex-col items-center justify-center md:w-[50%] ">
        <form action="" className="flex flex-col items-center w-[100%] h-fit ">
          <h1 className="text-white md:text-black text-[1.6rem] font-medium mb-4 ">
            Welcome Back
          </h1>
          <div className="w-[100%]">
            <label htmlFor=""></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-2 border-[2px] border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400 my-2 bg-transparent text-[0.9rem] text-white md:text-black"
            />
          </div>
          <div className="w-[100%] my-2">
            <label htmlFor=""></label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full p-2 border-[2px] border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400  bg-transparent text-[0.9rem] text-white md:text-black"
            />
            <div className=" w-[100%] text-right ">
            <a href="#" className="  text-[0.9rem] text-white hover:text-primary-300 md:text-black md:hover:text-primary-900 ">
              Forgot Password?
            </a>
            </div> 
          </div>
          <button
            type="submit"
            value="submit"
            className="w-[100%] p-2 text-white bg-gradient-to-t from-primary-800 to-primary-400 shadow-lg md:hover:shadow-lg rounded-lg my-2 font-medium "
          >
            Login
          </button>
          <div className="flex flex-row my-1 gap-1">
            <p className="text-[0.9rem] text-white md:text-black">Do not have an account?</p>
            <Link to="/" className="text-[0.9rem] text-white hover:text-primary-300 md:text-primary-900 underline">
              Signup
            </Link>
          </div>
        </form>

        {/* other Login options */}
        <div className="w-[100%] flex flex-row gap-3 items-center justify-center my-2">
          <hr className="flex-1 border-t-1 border-gray-400" />
          <span className="text-[0.9] text-gray-400 md:text-gray-500">or</span>
          <hr className="flex-1 border-t-1 border-gray-400" />
        </div>
        <div className="flex flex-col items-center w-[100%] h-fit ">
          <div className="w-[100%] my-3">
            <button className="w-[100%] flex flex-row justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
              <img src={Google} alt="this is google icon" className=" w-6 h-6"/>
              Continue With Google
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[100%] my-3">
            <button className="w-[50%] flex flex-row justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200  rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
              <img src={facebook} alt="this is facebook icon" className=" w-6 h-6"/>
              Facebook
            </button>
            <button className="w-[50%] flex flex-row justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
            <img src={linkedIn} alt="this is linkedIn icon" className=" w-6 h-6"/>
              LinkedIn
            </button>
          </div>
        </div>
      </div>
       {/* bottom panel for mobile */}
      <div className=" w-[100%] md:hidden ">
        <img src={painting} alt="this is an image" />
      </div>
    </div>
  );
}

export default Login;
