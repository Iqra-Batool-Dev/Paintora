import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidePanel from "../SidePanel";
import  painting from "../../assets/images/painting.png";
import Google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedIn from "../../assets/icons/linkedIn.svg"


function Signup() {
  // state for input fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({})

  //function to handle the inputs
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const validate = () => {
    let newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    return newErrors
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted:', formData)
      // Handle form submission (e.g., call API)
    }
  };

  // function is ended
  return (
    <div className=" flex flex-col justify-center  ">
    <div className=" w-[100%] h-[100vh]  flex flex-col  overflow-hidden bg-primary-800  md:rounded-[20px] shadow-xl md:h-[81vh] md:mx-auto md:my-5  md:bg-gray-50 md:w-[60%] md:flex-row ">
      {/* left side panel */}
      <SidePanel />

      {/* right side form */}
      <div className=" w-full  p-10 flex flex-col items-center justify-center md:w-[50%] ">
        <form action="" onSubmit={handleSubmit} className="flex flex-col items-center w-[100%] h-fit ">
          <h1 className=" text-white text-center md:text-black text-[1.6rem] font-medium mb-4 ">
            Create Account
          </h1>
          <div className="w-[100%] mb-1">
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border-[2px] ${errors.email ? 'border-red-500' : 'border-gray-200'} border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400 my-2 bg-transparent text-[0.9rem] text-white md:text-black`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="w-[100%] mb-1">
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-2 border-[2px] ${errors.password ? 'border-red-500' : 'border-gray-200'} border-gray-200 rounded-lg outline-primary-300 hover:border-primary-400 my-2 bg-transparent text-[0.9rem] text-white md:text-black`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            type="submit"
            value="submit"
            className="w-[100%] p-2 text-white bg-gradient-to-t from-primary-800 to-primary-400 shadow-lg md:hover:shadow-lg rounded-lg my-2 font-medium "
          >
            Create
          </button>
          <div className="flex flex-row my-1 gap-1">
            <p className="text-[0.9rem] text-white md:text-black">Already have an account?</p>
            <Link to="/login" className="text-[0.9rem] text-white  md:text-primary-900 underline">
              Login
            </Link>
          </div>
        </form>

        {/* other signup options */}
        <div className="w-[100%] flex flex-row gap-3 items-center justify-center my-2">
          <hr className="flex-1 border-t-1 border-gray-400" />
          <span className="text-[0.9rem] text-gray-400 md:text-gray-500">or</span>
          <hr className="flex-1 border-t-1 border-gray-400" />
        </div>
        <div className="flex flex-col items-center w-[100%] h-fit ">
          <div className="w-[100%] my-3">
            <button className="w-[100%] flex flex-row  justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
              <img src={Google} alt="this is google icon" className=" w-6 h-6"/>
              Continue With Google
            </button>
          </div>
          <div className="flex flex-row gap-4 w-[100%] my-3">
            <button className="w-[50%] flex flex-row justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200  rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
              <img src={facebook} alt="this is facebook icon" className=" w-6 h-6"/>
              Facebook
            </button>
            <button className="w-[50%]  flex flex-row  justify-center items-center gap-2 h-fit p-2  border-[2px] border-gray-200 rounded-lg hover:border-primary-400 hover:bg-gray-100 text-[0.9rem] text-gray-400 md:text-black">
            <img src={linkedIn} alt="this is linkedIn icon" className=" w-6 h-6"/>
              LinkedIn
            </button>
          </div>
        </div>
      </div>
      {/* bottom panel for mobile */}
      <div className=" w-[100%] flex flex-row justify-center md:hidden ">
        <img src={painting} alt="this is an image" />
      </div>
    </div>
    </div>
  );
}

export default Signup;
