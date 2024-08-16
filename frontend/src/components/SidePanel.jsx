import React from "react";
import painting from "../assets/images/painting.png";


function SidePanel() {
  return (
    <>
      <div className="   w-full hidden   p-5 bg-gradient-to-t from-primary-900 to-primary-600  md:w-[50%]  md:flex  md:flex-col justify-around">
        <div className="w-[100%] text-center">
          <h1 className=" text-secondary-400 font-bold text-[2.3rem] ">
            PAINTORA
          </h1>
          <p className=" text-white font-semibold text-[1.6rem] ">
            We Are Here For
          </p>
          <p className=" text-white font-semibold text-[1.6rem]  ">
            Uniting Painters With{" "}
            <span className=" text-secondary-400 "> Passion And Purpose </span>
          </p>
        </div>
        <img src={painting} alt="this is an image" className="w-[100%]  " />
      </div>
    </>
  );
}

export default SidePanel;
