import React from 'react'
import { Link, NavLink } from "react-router-dom";
import HeaderImage from '../../assets/images/headerImage.png'
import Marquee from 'react-fast-marquee'
import Data from './Data.json'

function Home() {
    return (
    <div>
    {/* first section of landing page */}
        <section className='bg-gradient-to-t from-primary-800 to-primary-400 flex flex-col justify-between items-center border-none rounded-xl w-[95%] mx-auto my-6 px-5 py-8 md:flex-row'>
        <div className='w-[100%]  md:w-[50%] '>
        <img src={HeaderImage} alt=" this is an image" />
        </div>

        <div className='w-[100%] md:w-[50%] px-4 text-10 text-center flex flex-col'>
            <h1 className=' font-Montserrat text-[2.2rem] font-semibold text-white text-center md:text-left w-[100%] md:w-[80%]'>Connect with The Best <span className=' font-Merienda text-primary-900'>  Painters</span> Near You</h1>
            <p className=' text-white text-center md:text-left text-[0.9rem] md:text-[1.3rem] my-6'>Easily find and hire professional painters to bring your home and furniture to life.</p>
            <Link
                to="/signup"
                className=" text-[0.9rem] md:text-[1rem] text-primary-700 bg-white font-semibold px-4 py-3  border-none rounded-lg   duration-100 hover:bg-primary-500 hover:text-white"
            >
                Get Started
            </Link>
        </div>
        </section>

{/* second section */}
        <section className='w-[100%] my-20  relative'>
            <Marquee  autoFill  pauseOnHover speed={60} >
                {
                    Data.map((data)=>{
                        return(
                        <div className= {`w-[250px] h-[300px] flex flex-col justify-end space-y-1 p-4 bg-no-repeat  bg-cover bg-blend-overlay bg-black/35 mx-5 border-none rounded-2xl `} style={{backgroundImage: `url(${data.image})`}} key={data.id}>
                            <h3 className=' text-white font-bold'>{data.userName}</h3>
                            <p className=' text-white font-bold'>{data.speciality}</p>
                        </div>
                    )
                    })
                }
            </Marquee>
        </section>

        {/* third section */}

        <section className='w-[100%] flex flex-col space-y-10 justify-center items-center px-10 md:px-64 py-32 bg-secondary-500 bg-opacity-70'>
                <h1 className=' text-[2.2rem] md:text-[3.5rem] text-center font-bold text-gray-950 leading-[50px]  '>
                    Find your next painter today
                </h1>
                <p className='text-[0.9rem] md:text-[1.3rem] text-center text-gray-900'>
                    Most of the people use paintora to hire creative professional.
                    brows the thousands of profiles to find the perfect painter acording to your interest. 
                </p>
                <div className=' flex flex-row space-x-7'>
                    <Link
                    to="/signup"
                    className=" text-[0.9rem] md:text-[1rem] bg-primary-700 text-white font-semibold px-4 py-3  border-[2px] border-none rounded-lg duration-100 hover:bg-primary-500"
                    >
                        Get Started
                    </Link>
                    <Link
                    to="/signup"
                    className=" text-[0.9rem] md:text-[1rem]  bg-white text-gray-950 font-semibold px-4 py-3  border-[2px] border-none rounded-lg duration-100 hover:text-gray-500"
                    >
                        Find Painters
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center  gap-1 ">
                    <p className="text-[0.9rem] md:text-[1.3rem] text-black text-center">Do you want to show your painting skills?</p>
                    <Link to="/signup" className="text-[0.9rem] md:text-[1.3rem]   text-primary-900 hover:text-primary-500 underline">
                        Join Us
                    </Link>     
                </div>

        </section>

    
    </div>
    )
}

export default Home
