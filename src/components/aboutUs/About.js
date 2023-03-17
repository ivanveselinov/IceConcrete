import React, { useState } from 'react'
import AboutUsDelete from './AboutUsDelete'
import AboutUsInput from './AboutUsInput'
import AboutUsRead from './AboutUsRead'
import AboutUsUpdate from './AboutUsUpdate'

const About = () => {


  return (
    <div className='w-full h-screen border'>
        <h1 className="text-center p-10 mt-10 text-4xl">About Us </h1>
          <AboutUsInput/>
        <div className="w-full h-3/4 border-2 flex">  
          <div className="w-1/3 h-1/2 border m-auto rounded-xl">
            <p>Image of Ice Concreting</p>
          </div>
          <div className="w-1/3 h-1/2 border m-auto rounded-x p-2 text-xl break-words overflow-scroll">
           <AboutUsRead/>
           <AboutUsDelete/>
           <AboutUsUpdate/>
          </div>
        </div>
    </div>
  )
}

export default About