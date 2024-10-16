import React , { useState }from 'react';
import { useUser } from '../../utils/UserContext.jsx';


function About() {

    const { user = {}, loading } = useUser();

    if (loading) return <p>Loading profile...</p>
  return (
    <div className='flex flex-row w-[100%] space-x-20'>
      <div className='flex flex-col md:w-[60%]'>
        <div>
            <h2>Biography</h2>
            <p>{user.bio}</p>
        </div>
      </div>
      <div className=' flex flex-col md:w-[40%]'>

      </div>
    </div>
  )
}

export default About
