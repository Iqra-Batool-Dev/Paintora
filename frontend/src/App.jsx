import Navbar from './components/Header/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'


function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
