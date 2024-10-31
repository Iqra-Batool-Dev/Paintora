import React, { createContext, useState, useContext , useEffect} from 'react'
import axios from 'axios'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

  
  const [user, setUser] = useState({
    _id: '',
    username: '',
    email: '',
    password: '',
    fullName: '',
    avatar: '',
    location: '',
    bio: '',
    skills: [] ,
    socialLinks: {facebook: '' , instagram: '', linkedIn: '' , whatsapp: ''}
  })

  // Function to update user data in the context
  const updateUser = (newUserData) => {
    setUser((prev) => ({ ...prev, ...newUserData }))
  }
  
  console.log(user)

  
  
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}












//   // Function to refresh the access token
// const refreshAccessToken = async () => {
//   try {
//     const response = await axios.post('http://localhost:8000/api/v1/users/refresh-token', {}, { withCredentials: true });
//     const newAccessToken = response.data.data.accessToken;
//     console.log(response)
//     // Update the user with the new token
//     updateUser(response.data);  ////
    
//     console.log('Token refreshed:', newAccessToken);
//   } catch (error) {
//     console.error('Failed to refresh token:', error);
//     setUser(null) //logout user 
//   }
//   finally {
//     setLoading(false)  // Stop the loading state
//   }
// };

// useEffect(() => {
//   const timer = setTimeout(() => refreshAccessToken(), 500);  // Wait 500ms
//   return () => clearTimeout(timer);
// }, []);













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