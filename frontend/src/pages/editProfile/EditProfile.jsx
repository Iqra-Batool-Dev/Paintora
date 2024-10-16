import React, { useState , useEffect } from 'react'
import { useUser } from '../../utils/UserContext.jsx'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
  const [selectedTab, setSelectedTab] = useState('edit profile')
  const [tags, setTags] = useState([])
  const [inputTag, setInputTag] = useState('')
  const { user, updateUser } = useUser()
  const [formData, setFormData] = useState(user)
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  }) // State for password changes
  const [error, setError] = useState('')
  const navigate = useNavigate();
  


/// functionality to handle skills tags
  const handleAddTag = () => {
    if (inputTag) {
      setTags([...tags, inputTag]);
      setInputTag('')
    }
  }
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  useEffect(()=>{
    setFormData({...formData , skills: tags})
  }, [tags])

console.log(...tags)
/////


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  }

  // Handle changes for social links
  const handleSocialLinksChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialLinks: {
        ...formData.socialLinks, // Preserve existing links
        [name]: value, // Update only the relevant link
      },
    });
  };

  const handleSave = () => {

    if (selectedTab === 'change email or password') {
      // Password change logic
      const { currentPassword, newPassword, confirmPassword } = passwordData;

      if (currentPassword !== user.password) {
        setError('Current password is incorrect.')
        return;
      }
      if (newPassword !== confirmPassword) {
        setError('New passwords do not match.')
        return;
      }
      if (newPassword === currentPassword) {
        setError('New password must be different from the current password.')
        return;
      }

      // Update password in formData
      setFormData({ ...formData, password: newPassword });
      setError(''); // Clear any previous errors
    }

    // Call updateUser from context and navigate back to profile

    updateUser(formData);
    navigate('/profile');
  };

  console.log(formData)

  return (
    <div className="p-8 w-[100%] mx-auto flex flex-col md:flex-row  justify-center items-start gap-10 min-h-[100vh]">
    <div className='flex flex-col md:w-[80%] max-w-3xl'>

    <div className="flex items-center space-x-4 my-7">
        <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
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
        <h2 className="text-[2rem] font-bold text-black/70">Edit Profile</h2>
        </div>
    {/* edit profile section starts here */}
    {selectedTab === 'edit profile' && (
      <div>
      <div className="space-y-6">
      <div>
      
        <input
          type="file"
          name="profilePicture"
          onChange={(e) =>
            setFormData({ ...formData, profilePicture: URL.createObjectURL(e.target.files[0]) })
          }
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
        />
      </div>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>User Name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          placeholder="Enter your username"
        />
      </div>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>Company Name / Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          placeholder="Enter your Name or your company name"
        />
      </div>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>City Name</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          placeholder="Enter your city"
        />
      </div>
      <div className='flex flex-col my-3'>
        <label htmlFor="description" className='font-bold text-[1rem] text-black/70'>Bio</label>
        <textarea 
            name="bio"  
            rows="10"  
            value={formData.bio}
            placeholder='Enter a description about your painting work...'
            className='w-[100%] outline-none border rounded-md p-2 hover:border-gray-300 focus:border-gray-300 text-[0.9rem] text-gray-500'
            onChange={handleChange}
            />
            <span className=' text-[0.9rem] text-gray-500'>Briefly describe about your self</span>
      </div>
      {/* here we will add an input element for skills */}
      <div className='w-[100%] my-2'>
        <p className=" font-bold text-[1rem] text-black/70 ">Skills</p>
        <div className="flex items-center space-x-2 w-[100%]">
          <input 
            type="text"
            value={inputTag}
            onChange={(e) => setInputTag(e.target.value)}
            className="w-full p-2 border outline-none rounded-md  hover:border-gray-300 focus:border-gray-300  text-[0.9rem] text-gray-500"
            placeholder="Enter keyword"
            
            
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 text-[0.9rem] md:[1rem]"
          >
            Add
          </button>
        </div>

        <div className="my-2 flex flex-wrap gap-2 w-[100%]">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 px-2 py-1 rounded-md"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-red-500 text-[0.9rem] md:[1rem]"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        </div>



      </div>
      </div>
    )}
    {/* edit profile section ends here */}

    {/* change email and password section here */}
    {selectedTab === 'change email or password' && (
      <div className=' space-y-6'>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>Email</label>
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          placeholder="user@gmail.com"
        />
      </div>
      <div>
              <label className="font-bold text-[1rem] text-black/70">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
                placeholder="Enter your current password"
              />
            </div>
            <div>
              <label className="font-bold text-[1rem] text-black/70">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
                placeholder="Enter your new password"
              />
            </div>
            <div>
              <label className="font-bold text-[1rem] text-black/70">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
                placeholder="Confirm your new password"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
    )}

    {/* change email and password ends here */}

    {/* Social Links section start here */}
    {selectedTab === 'add social links' && (
    <div className=' space-y-6'>
    <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>Facebook</label>
        <input
          type="text"
          name="facebook"
          value={formData.skills.facebook}
          onChange={handleSocialLinksChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          
        />
      </div>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>Instagram</label>
        <input
          type="text"
          name="instagram"
          value={formData.skills.instagram}
          onChange={handleSocialLinksChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          
        />
      </div>
      <div>
      <label htmlFor="" className='font-bold text-[1rem] text-black/70'>LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={formData.skills.linkedin}
          onChange={handleSocialLinksChange}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
          
        />
      </div>
    </div>
  )}
    {/* social links section ends here */}


      <button
        onClick={handleSave}
        className="mt-4 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md tex-[1rem] w-[200px]"
      >
        Save Changes
      </button>
      </div>

      <div className='flex flex-col gap-2 p-8 items-start'>
        {['Edit Profile' , 'Change Email or Password', 'Add Social links'].map((tab) => (
          <button key={tab} 
            onClick={() => setSelectedTab(tab.toLowerCase())}
            className= {`py-2 px-4  
            ${selectedTab === tab.toLowerCase()
                ? ' text-accent-400 '
                : 'text-gray-500 hover:text-black/70'
            }`}
            >
            {tab}
          </button>
        ))}
        </div>
    </div>
  
  )
  
}

export default EditProfile;
