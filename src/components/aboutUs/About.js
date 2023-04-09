import React, { useState } from 'react'
import { useContextProvider } from '../../context/StateProvider'
import AboutUsImageRead from './AboutUsImageRead'
import AboutUsInput from './AboutUsInput'
import AboutUsRead from './AboutUsRead'
import { Fade } from "react-awesome-reveal";

// TEST!!

const About = () => {

  const [{appUser}, dispatch] = useContextProvider();
  
  const aboutUs = "text-center p-10 mt-2 text-4xl w-full h-23"

  return (

    <Fade top bottom duration={3000}>
    <div className="w-full pt-24 border-b-2 " id="aboutUs">
       
     

        <div className="mt-2 w-full block"> 
           <p className="text-center p-10 mt-2 text-4xl w-full h-23 xs:text-2xl md:text-2xl lg:text-2xl xl:text-4xl">About Us </p>
                       
        {appUser.uid && 
          <div className="w-1/3 p-1 border space-x-2 m-auto rounded-xl mb-2 shadow-sm bg-slate-400 xs:w-4/5 sm:w-2/3 md:w-2/3 lg:w-1/3">
            <div className="w-full">
              <AboutUsInput/>
            </div>
         </div>
          }  

        <div className="h-100 flex mb-12 xs:w-4/5 xs:m-auto md:w-4/5 md:m-auto lg:w-full xl:w-full">
            <div className="max-w-1/3 flex m-auto rounded-xl mt-1 mb-1 m=auto mr-20 shadow-sm bg-red-500 xs:hidden sm:hidden md:block lg:block xl:block">
              <AboutUsImageRead/>
            </div>
                   
            <div className="w-1/3 h-auto flex m-auto rounded-xl ml-10 bg-red-500 shadow-sm p-1 xs:m-auto sm:m-auto"
              style={{
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                width : 500,
                height : 430,
              }}>
                <div className="rounded-xl h-full border-2 w-full bg-slate-400 break-words overflow-auto">
                  <AboutUsRead/>
                </div>
            </div>
          </div>
        </div>         
      </div>
      </Fade>
  )
}

export default About