import React, { useState } from 'react'
import { useContextProvider } from '../../context/StateProvider'
import AboutUsImageRead from './AboutUsImageRead'
import AboutUsInput from './AboutUsInput'
import AboutUsRead from './AboutUsRead'

const About = () => {

  const [{appUser}, dispatch] = useContextProvider();
  
  const aboutUs = "text-center p-10 mt-2 text-4xl w-full h-23"

  return (

    <div className="w-full pt-24 border-b-2 " id="aboutUs">
       
     

        <div className="mt-2 w-full block "> 
           <p className={aboutUs}>About Us </p>
             
          
        {appUser.uid && 
          <div className="w-1/3 p-1 border space-x-2 m-auto rounded-xl mb-2 shadow-sm bg-slate-400">
            <div className="w-full">
              <AboutUsInput/>
            </div>
         </div>
          }  

        <div className="w-full h-100 flex border-2">
            <div className="max-w-1/3 flex m-auto rounded-xl mt-1 mb-1 mr-20 shadow-sm bg-red-500 ">
              <AboutUsImageRead/>
            </div>
         
            {/* <div className="w-1/3 flex m-auto rounded-xl mt-6 mb-1 ml-10 bg-slate-400 shadow-sm break-words overflow-auto " */}

            <div className="w-1/3 flex m-auto rounded-xl mb-1 ml-10 bg-slate-400 shadow-sm break-words overflow-auto "
              style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : "center",
                width : 500,
                height : 430,
              }}>
              <AboutUsRead/>
            </div>
          </div>

        </div> 
    </div>
  )
}

export default About