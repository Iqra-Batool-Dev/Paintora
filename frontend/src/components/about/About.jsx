import React , { useState }from 'react';
import { useUser } from '../../utils/UserContext.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPerson} from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-regular-svg-icons';


function About() {

    const { user = {}, loading } = useUser();
    console.log(user.skills)

    if (loading) return <p>Loading profile...</p>
  return (
    <div className='flex  flex-col w-[100%] p-6 md:flex-row space-y-10 md:w-[80%] md:space-x-24 mx-auto'>
      <div className='flex flex-col md:w-[60%] space-y-10'>
        <div className=' space-y-3'>
            <h2 className='text-[1rem] text-black font-semibold '>Biography</h2>
            <p className='text-[0.9rem] text-black/80 font-medium'>{user.bio}</p>
        </div>
        <div className='space-y-3 '>
        <h2 className='text-[1rem] text-black font-semibold '>Skills</h2>
            <div className='flex flex-row flex-wrap gap-4'>
            {user.skills.map((skill , index)=>(
                <p key={index} className='bg-gray-100 rounded-lg  px-3 py-1 text-[0.9rem] '> {skill} </p>
            ))}
            </div>
        </div>
      </div>
      <div className=' flex flex-col md:w-[40%] space-y-10'>
            <div className='bg-gray-50 md:rounded-md p-5 space-y-5 text-[0.9rem]'>
                <div className=' flex flex-row items-center gap-2 '>
                    <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 " />
                    <p> {user.location} </p>
                </div>
                <div className=' flex flex-row items-center gap-2 '>
                    <FontAwesomeIcon icon={faUser} className="text-gray-400 " />
                    <p> Member since</p>
                </div>
            </div>
            <div>
                <h2 className='text-[1rem] text-black font-semibold'>Social</h2>
                
            </div>
      </div>
    </div>
  )
}

export default About
