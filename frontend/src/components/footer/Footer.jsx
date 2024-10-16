import React from "react";
import { Link, NavLink } from "react-router-dom";
import pLogo from "../../assets/images/pLogo.png";
import Google from "../../assets/icons/google.svg"
import facebook from "../../assets/icons/facebook.svg"
import linkedIn from "../../assets/icons/linkedIn.svg"

function Footer() {
    return (
        <div >
    <footer className=" w-[100%] h-[80px] flex flex-col border-t-[1px]  py-3 px-2 ">
        <div className=" flex flex-col gap-2 md:flex-row md:justify-around  items-center">
        <div className="">
        <Link to="/" className=" flex items-center">
            <img src={pLogo} alt="this is a logo" className=" w-25 h-10" />
        </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center ">
        <Link
            to="/find"
            className={` text-[1rem]  px-3 py-3  text-black hover:text-gray-400 `}
        >
            Search Painters
        </Link>
        <Link
            to="/about"
            className={` text-[1rem]   px-3 py-3  text-black hover:text-gray-400 `}
        >
            About Us
        </Link>
        <Link
            to="/inspiration"
            className={` text-[1rem]   px-3 py-3  text-black hover:text-gray-400 `}
        >
            inspiration
        </Link>
        <Link
            to="/create"
            className={` text-[1rem]   px-3 py-3  text-black hover:text-gray-400 `}
        >
            Show Talent
        </Link>
        </div>
        <div className=" socialLinks flex flex-row items-center gap-4">
            <button >
            <img src={Google} alt="this is google icon" className=" w-6 h-6"/>
            </button>
            <button>
            <img src={facebook} alt="this is facebook icon" className=" w-6 h-6"/>
            </button>
            <button>
            <img src={linkedIn} alt="this is linkedIn icon" className=" w-6 h-6"/>
            </button>
        </div>
        <div className="flex justify-center items-center ">
                <span className=" text-[0.7rem]">@ 2024 Paintora</span>
        </div>
        </div>
        
    </footer>
    </div>
    )
}

export default Footer;
