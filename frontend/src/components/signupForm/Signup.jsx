import React, { useState } from "react";
import SidePanel from "../SidePanel";

function Signup() {
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
    <div className=" w-[80%] flex flex-col overflow-hidden bg-gray-50 rounded-[20px] shadow-xl h-[95vh] mx-auto my-5 md:w-[60%] md:flex-row ">
      {/* left side panel */}
      <SidePanel />

      {/* right side form */}
      <div className=" w-full  p-10 flex flex-col items-center justify-center md:w-[50%] ">
        <form action="" className="flex flex-col items-center w-[100%] h-fit ">
          <h1 className="text-black text-[1.6rem] font-medium mb-4 ">
            Create Account
          </h1>
          <div className="w-[100%]">
            <label htmlFor=""></label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-2 border-[2px] border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400 my-2 bg-transparent text-[0.9rem]"
            />
          </div>
          <div className="w-[100%]">
            <label htmlFor=""></label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full p-2 border-[2px] border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400 my-2 bg-transparent text-[0.9rem]"
            />
          </div>
          <button
            type="submit"
            value="submit"
            className="w-[100%] p-2 text-white bg-gradient-to-t from-primary-800 to-primary-400 hover:shadow-lg rounded-lg my-2 font-medium "
          >
            Create
          </button>
          <div className="flex flex-row my-1 gap-1">
            <p className="text-[0.9rem]">Already have an account?</p>
            <a href="#" className="text-[0.9rem] text-primary-900 underline">
              Login
            </a>
          </div>
        </form>

        {/* other signup options */}
        <div className="w-[100%] flex flex-row gap-3 items-center justify-center my-2">
          <hr className="flex-1 border-t-1 border-gray-400" />
          <span className="text-[0.9] text-gray-500">or</span>
          <hr className="flex-1 border-t-1 border-gray-400" />
        </div>
        <div className="flex flex-col items-center w-[100%] h-fit ">
          <div className="w-[100%] my-3">
            <button className="w-[100%] h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem]">
              Continue With Google
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[100%] my-3">
            <button className="w-[50%] h-fit p-2  border-[2px] border-gray-200  rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem]">
              Facebook
            </button>
            <button className="w-[50%] h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem]">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
