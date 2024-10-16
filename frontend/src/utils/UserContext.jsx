import React, { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: 'Iqra Batool',
    gmail: 'iqrabatool@gmail.com',
    password: '1234the',
    fullName: 'paints company',
    profilePicture: '',
    location: 'Faisalabad',
    bio: 'hey i am iqra batool and i am a web developer',
    skills: ['website', 'paint', 'home paint' ],
    socialLinks: {facebook: '' , instagram: '', linkedIn: ''}
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
