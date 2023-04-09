import React, { useEffect, useState } from 'react'
import Home from '../../home/Home'
import About from '../aboutUs/About'
import ContactUs from '../contactUs/ContactUs'
import Foother from '../foother/Foother'
import Header from '../header/Header'
import Projects from '../Projects/Projects'
import { Fade } from "react-awesome-reveal";



const MainDashBoard = () => {

  return (

  <Fade duration={2000}>
    <div >   
      <Home/>
      <About/>
      <Projects/>
      <ContactUs/>
      <Foother/>
    </div>
  </Fade>
  )
}

export default MainDashBoard