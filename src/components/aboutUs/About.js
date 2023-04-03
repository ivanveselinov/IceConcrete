import React, { useState } from 'react'
import { useContextProvider } from '../../context/StateProvider'
import AboutUsImageRead from './AboutUsImageRead'
import AboutUsInput from './AboutUsInput'
import AboutUsRead from './AboutUsRead'
import Zoom from 'react-reveal/Zoom';


const About = () => {

  const [{appUser}, dispatch] = useContextProvider();
  
  const aboutUs = "text-center p-10 mt-2 text-4xl w-full h-23"

  return (

    <Zoom top bottom duration={1500}>
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

        <div className="w-full h-100 flex mb-12">
            <div className="max-w-1/3 flex m-auto rounded-xl mt-1 mb-1 mr-20 shadow-sm bg-red-500 ">
              <AboutUsImageRead/>
            </div>
         
            {/* <div className="w-1/3 flex m-auto rounded-xl mt-6 mb-1 ml-10 bg-slate-400 shadow-sm break-words overflow-auto " */}
          
            <div className="w-1/3 h-auto flex m-auto rounded-xl ml-10 bg-red-500 shadow-sm p-1"
              style={{
                display : "flex",
                alignItems : "center",
                justifyContent : "center",
                width : 500,
                height : 430,
              }}>
                <div className="rounded-xl h-full border-2 w-full bg-slate-400 break-words overflow-auto ">
                  <AboutUsRead/>
                </div>
            </div>
          </div>
        </div>         
      </div>
      </Zoom>
  )
}

export default About