import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Foother = () => {

  const icons = "mb-2";

  return (
    <div className="w-full h-36 inline-flex justify-between bg-gradient-to-r from-orange-600 to-blue-600 rounded-b-xl">
      <div className="w-1/3 block">
        <div className="w-20 h-1/2"></div>
        <div className="w-80 h-1/2 "> 
          <a href="https://www.linkedin.com/in/ivanveselinov/" target="blank" >
            <p className="mt-10 ml-2">
              Copyright © 2023 Ivan Veselinov
            </p>
          </a>
          </div>
      </div>
      <div className="w-1/3 h-20 m-auto text-center">
        <p className="text-3xl text-right mt-4"> Follow Us <ThumbUpIcon className={icons} sx ={{ fontSize: 30 }}/></p>
       
      </div>
      <div className="w-1/3 h-28 m-auto">
        <div className="h-1/2 w-full text-center text-3xl">
          <a href="https://www.facebook.com/iceconcreting" target="_blank"><FacebookIcon  sx ={{ fontSize: 40 }}/>Facebook</a>
        </div>
        <div className="h-1/2 w-full text-center text-3xl">
          <a href="https://www.instagram.com/iceconcreting/" target="_blank" ><InstagramIcon  sx ={{ fontSize: 40 }}/>Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Foother