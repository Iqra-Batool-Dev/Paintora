import React , { useState , useEffect , useContext }from 'react';
import {useUser} from '../../utils/UserContext.jsx';
import { useNavigate } from 'react-router-dom';
import About from '../../components/about/About.jsx';
import Comments from '../../components/Comments' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState('posts')
  const [userPosts, setUserPosts] = useState([])
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // const response = await axios.get(`http://localhost:8000/api/v1/post/user/${user._id}`)
        const response = await axios.get(`http://localhost:8000/api/v1/post/user/671e815326af969f18da87ab`)
        console.log(response)
        setUserPosts(response.data.data); // Assuming posts are in `data` field
        
      } catch (error) {
        console.error("Error fetching user's posts:", error);
      }
    };      

    if (user?._id && selectedTab === 'posts') {
      fetchUserPosts();
    }
  }, [user?._id, selectedTab]);
  

  return (
    <div className="md:p-10 py-10    w-[100%] mx-auto min-h-[100vh]">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-x-20 max-w-3xl">
        <div className='flex flex-col md:flex-row space-x-2 items-center '>
        <div className=" w-16 h-16 md:w-20 md:h-20 bg-orange-400 rounded-full flex items-center justify-center text-white text-[1rem] md:text-[2rem]">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          ) : (
            user.username[0] || <FontAwesomeIcon icon={faUser}/>
          )}
        </div>
        <div>
          <h1 className="text-2xl text-black/80 font-bold">{user.username || "name"}</h1>
          <p className="text-gray-500">{user.fullName || "fullname"}</p>
        </div>
        </div>
        <button
          className="  text-white bg-primary-500 py-2 px-4 rounded-md"
          onClick={() => navigate('/editProfile')}
        >
          Edit Profile
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className=" w-[100%] flex md:flex-row flex-nowrap overflow-x-scroll md:overflow-visible  gap-3 border-b py-2 px-6 mt-6 ">
        {['Posts', 'Collections',  'About' , 'Reviews'].map((tab) => (
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
          <div>
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
                <div key={post._id} className="post">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    {/* Display media if available */}
                    {post.media && post.media.map((mediaItem, index) => (
                        <img key={index} src={mediaItem.url} alt="Post media" className="post-media" />
                    ))}
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )}
          </div>
        )}

        {/* the collection component here */}
        {selectedTab === 'collection' && (
          <div></div>
        )}

        {/* the about component here */}
        {selectedTab === 'about' && (
          <About/>
        )       
        }

        {/* the about component here */}
        {selectedTab === 'reviews' && (
          <Comments/>
        )       
        }


      </div>
    </div>
  );
};

export default UserProfile;

