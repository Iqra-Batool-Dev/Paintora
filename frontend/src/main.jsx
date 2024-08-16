import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './components/signupForm/Signup.jsx'
import Login from './components/loginForm/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element ={<Signup/>}/>
    <Route path='login' element = {<Login/>}/>
  </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)



