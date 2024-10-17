import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Iqra Batool',
    email: 'iqrabatool@gmail.com',
    password: '1234the',
    fullName: 'paints company',
    profilePicture: '',
    location: 'Faisalabad',
    bio: 'hey i am iqra batool and i am a web developer i can make all type of websites using all languages, you do not know my powers . i am a programmer who does not work at time but at last take all tensions to her head and make the things running so you have found a right person for your work who will take your contract of three month but make the project in the last three weeks. thank you',
    skills: ['website', 'paint', 'home paint', 'water paint', 'commercial paint', 'painter', 'wall paints', 'kitchen paints' ],
    socialLinks: {facebook: '' , instagram: '', linkedIn: '' , whatsapp: ''}
  })
  const updateUser = (newUserData) => {
    setUser((prev) => ({ ...prev, ...newUserData }))
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
