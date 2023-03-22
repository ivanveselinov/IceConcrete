import React from 'react'
import Mailer from './mailer'

const ContactUs = () => {
  return (
    <div className="w-full h-screen pt-24" id="contactUs"> 
      <h1 className="text-center p-10 mt-10 text-4xl"> ContactUs</h1> 
     <div className="w-3/4 m-auto h-3/4">
        <Mailer/>
     </div>
    </div>
  )
}

export default ContactUs