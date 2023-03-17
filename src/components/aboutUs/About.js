import React, { useState } from 'react'
import AboutUsInput from './AboutUsInput'

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
            <p>What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</p>
          </div>
        </div>
    </div>
  )
}

export default About