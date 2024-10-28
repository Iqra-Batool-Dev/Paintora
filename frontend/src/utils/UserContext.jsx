import React, { createContext, useState, useContext , useEffect} from 'react'
import axios from 'axios'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

  
  const [user, setUser] = useState(null)
  
  // Function to update user data in the context
  const updateUser = (newUserData) => {
    setUser((prev) => ({ ...prev, ...newUserData }))
    console.log(newUserData)
    const userId = newUserData.data.user._id
    console.log(userId) 
  }


    // Function to refresh the access token
  const refreshAccessToken = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/refresh-token', {}, { withCredentials: true });
      const newAccessToken = response.data.accessToken;

      // Update the user with the new token
      updateUser({ accessToken: newAccessToken });
      console.log('Token refreshed:', newAccessToken);
    } catch (error) {
      console.error('Failed to refresh token:', error);
      // Optional: Handle logout if refresh fails
    }
  };

  useEffect(()=>{
    refreshAccessToken()
  }, [])



  
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}




// const fetchUserData = async () => {
//   try {
//     const token = localStorage.getItem('token')
//     console.log(token)
//     if(!token) return 
//     const response = await axios.get('http://localhost:8000/api/v1/users/me', {
//       headers: { Authorization: `Bearer ${token}` },
//     })

//     setUser(response.data); // Update context with user data
//   } catch (error) {
//     console.error('Failed to fetch user data', error)
//   }
// }

// useEffect(() => {
//   fetchUserData() // Fetch user data on component mount
// }, [])











// const updateUser = (newUserData) => {
//   const [user, setUser] = useState(null)
//   setUser((prev) => ({ ...prev, ...newUserData }))
// }
{/*const [user, setUser] = useState({
  username: 'Iqra Batool',
  email: 'iqrabatool@gmail.com',
  password: '1234the',
  fullName: 'paints company',
  profilePicture: '',
  location: 'Faisalabad',
  bio: 'hey i am iqra batool and i am a web developer i can make all type of websites using all languages, you do not know my powers . i am a programmer who does not work at time but at last take all tensions to her head and make the things running so you have found a right person for your work who will take your contract of three month but make the project in the last three weeks. thank you',
  skills: ['website', 'paint', 'home paint', 'water paint', 'commercial paint', 'painter', 'wall paints', 'kitchen paints' ],
  socialLinks: {facebook: '' , instagram: '', linkedIn: '' , whatsapp: ''}
})*/}