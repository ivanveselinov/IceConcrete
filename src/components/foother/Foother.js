import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Fade from 'react-reveal/Fade';


const Foother = () => {

  const icons = "mb-2";
  const hoverHeader = "hover:text-blue-300"

  return (
  
  <Fade bottom duration={3000}>
    <div className="w-full h-36 inline-flex justify-between bg-gradient-to-r from-orange-600 to-blue-600 rounded-b-xl">
      <div className="w-1/3 block">
        <div className="w-20 h-1/2"></div>
        <div className="w-80"> 
          <a href="https://www.linkedin.com/in/ivanveselinov/" className={hoverHeader} target="blank" >
            <p className="mt-10 ml-2 xs:text-sm md:text-l lg:text-xl xl:text-xl">
              Copyright © 2023 Ivan Veselinov
            </p>
          </a>
          </div>
      </div>
      <div className="w-1/3 h-20 m-auto text-center">
        <p className="text-3xl text-right mt-4 xs:text-sm md:text-l lg:text-xl xl:text-xl"> Follow Us <ThumbUpIcon className={icons} sx ={{ fontSize: 30 }}/></p>
      </div>
      <div className="w-1/3 h-28 m-auto">
        <div className="h-1/2 w-full text-center text-3xl xs:text-sm md:text-l lg:text-3xl xl:text-3xl">
          <a href="https://www.facebook.com/iceconcreting" className={hoverHeader} target="_blank"><FacebookIcon  sx ={{ fontSize: 40 }}/>Facebook</a>
        </div>
        <div className="h-1/2 w-full text-center text-3xl xs:text-sm md:text-l lg:text-3xl xl:text-3xl">
          <a href="https://www.instagram.com/iceconcreting/" className={hoverHeader} target="_blank" ><InstagramIcon  sx ={{ fontSize: 40 }}/>Instagram</a>
        </div>
      </div>
    </div>
  </Fade>  
  )
}

export default Foother