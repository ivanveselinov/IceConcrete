import React from 'react'
import Home from '../../home/Home'
import About from '../aboutUs/About'
import ContactUs from '../contactUs/ContactUs'
import Projects from '../Projects/Projects'

const MainDashBoard = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Projects/>
      <ContactUs/>
    </div>
  )
}

export default MainDashBoard