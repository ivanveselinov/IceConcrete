import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';


const Mailer = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameChange = (e) => {
        setName(e.target.value);
        // console.log(setName);
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
        // console.log(setName);
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
        // console.log(setName);
    }

    const sendEmail = (e) =>{
      e.preventDefault();
      
      emailjs.sendForm('service_p6ijwr6', 'template_m9phko7', e.target, 'user_dtiDwo5fBoO5jlMqZQ827')
      .then((result) => {
          console.log('Your email is send successufuly',result.text);
      }, (error) => {
          console.log(error.text);
      })
        // have to insert a function here!!

    setEmail("")
    setName("")
    setMessage("")
    }

  return (
   
    <div className="w-3/4 m-auto w-30">
      <div className="w-1/3 mt-10 m-auto xs:w-4/5 md:w-4/5 lg:w-1/3">
        <form onSubmit={sendEmail}>
        <div className="bg-red-400 rounded-xl p-1">
        <input
                className="w-full p-2 h-12 rounded-xl bg-slate-200 xs:w-full md:w-full lg:w-full"
                placeholder="Insert Name and Surname?"
                onChange={nameChange}
                value={name}
              />
        </div>

        <div className="bg-red-400 mt-5 p-1 rounded-xl">
        <input
                className="w-full p-2 h-12 rounded-xl bg-slate-200"
                placeholder="Please insert your Email Address"
                onChange={emailChange}
                value={email}
              />

        </div>

        <div className="bg-red-400 mt-5 p-1 rounded-xl mb-5">
        <textarea
              className="w-full p-2 h-40 rounded-xl bg-slate-200"
              placeholder="Please insert your Email Address"
              onChange={messageChange}
              value={message}
        />
        </div>
        
        <Button 
            variant="contained" 
            color="success"
            type="submit"
            value="send"
            >      
          Send
        </Button>
        </form>
      </div>
   </div>
          



    
  )
}

export default Mailer