import React , { useState }from 'react';
import { useUser } from '../../utils/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import About from '../../components/about/About.jsx';

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState('posts')
  const { user = {}, loading } = useUser();
  const navigate = useNavigate();

  if (loading) return <p>Loading profile...</p>

  return (
    <div className="p-10  w-[100%] mx-auto min-h-[100vh]">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-x-20 max-w-3xl">
        <div className='flex flex-col md:flex-row space-x-2 items-center '>
        <div className=" w-16 h-16 md:w-20 md:h-20 bg-orange-400 rounded-full flex items-center justify-center text-white text-[1rem] md:text-[2rem]">
          {user.profilePicture ? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            user.username[0]
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-500">{user.fullName}</p>
        </div>
        </div>
        <button
          className=" bg-gray-100 py-2 px-4 rounded-md"
          onClick={() => navigate('/editProfile')}
        >
          Edit Profile
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-8 flex space-x-4 border-b py-2">
        {['Posts', 'Collections',  'About'].map((tab) => (
          <button key={tab} 
            onClick={() => setSelectedTab(tab.toLowerCase())}
            className= {`py-2 px-4  
            ${selectedTab === tab.toLowerCase()
                ? 'bg-gray-100 text-black rounded-full'
                : 'text-gray-500 hover:text-black/70'
            }`}
            >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-8">
        {/* <p>Here will go the user's posts or other selected content.</p> */}
        {/* the posts component here */}
        {selectedTab === 'posts' && (
          <div></div>
        )}

        {/* the collection component here */}
        {selectedTab === 'collection' && (
          <div></div>
        )}

        {/* the about component here */}
        {selectedTab === 'about' && (
          <About/>
        )}

      </div>
    </div>
  );
};

export default UserProfile;

