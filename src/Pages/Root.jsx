import React from 'react'
import NavBar from '../Components/Header/NavBar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
      <div>
          
          <NavBar/>
          <Outlet></Outlet>
        <Footer/>  

      
      </div>
  )
}
