import React, { useState } from 'react'
import { useContextProvider } from '../../context/StateProvider'
import AboutUsDelete from './AboutUsDelete'
import AboutUsInput from './AboutUsInput'
import AboutUsRead from './AboutUsRead'
import AboutUsUpdate from './AboutUsUpdate'

const About = () => {

  const [{appUser}, dispatch] = useContextProvider();

  return (
    <div className="w-full h-screen border">
        <h1 className="text-center p-10 mt-10 text-4xl">About Us </h1>
        
        {appUser.uid && 
        <div className="w-4/5 m-auto p-1 h-40 flex space-x-2 rounded-xl mb-2 bg-slate-200 shadow-sm">
          <div className="w-4/5 h-40 m-auto">
            <AboutUsInput/>
          </div>
       </div>
        }  
        
        <div className="w-full h-3/4 border-2 flex">  
          <div className="w-1/3 h-1/2 border m-auto rounded-xl">
            <p>Image of Ice Concreting</p>
          </div>
          <div className="w-1/3 h-1/2 border m-auto rounded-x p-2 text-xl break-words overflow-scroll">
           <AboutUsRead/>
          </div>
        </div>
    </div>
  )
}

export default About