import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from './components/signupForm/Signup.jsx'
import Login from './components/loginForm/Login'
import Home from './pages/Home/Home.jsx'
import Search from './pages/Search/Search.jsx'
import Inspiration from './pages/inspiration/Inspiration.jsx'
import PostDetails from './pages/postDetails/PostDetails.jsx'
import Painters from './pages/painters/Painters.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element ={<Home/>}/>
    <Route path='signup' element = {<Signup/>}/>
    <Route path='login' element = {<Login/>}/>
    <Route path='/search' element = {<Search/>}/>
    <Route path='/inspiration' element = {<Inspiration/>}/>
    <Route path= '/post/:postId' element={<PostDetails/>}/>
    <Route path= '/painters' element= {<Painters/>}/>
  </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)



