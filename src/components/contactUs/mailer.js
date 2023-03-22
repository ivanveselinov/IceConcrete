import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';


const Mailer = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameChange = (e) => {
        setName(e.target.value);
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
    }

    const messageChange = (e) => {
        setMessage(e.target.value)
    }

    const sendEmail = (e) =>{
        // have to insert a function here!!
    }

  return (
   
    <div className="w-3/4 m-auto w-30">
    <div className="w-1/3 mt-10 m-auto">
      <div className="bg-red-400 rounded-xl p-1">
      <input
              className="w-full p-2 h-12 rounded-xl bg-slate-200"
              placeholder="Insert Name and Surname?"
            />
      </div>

      <div className="bg-red-400 mt-5 p-1 rounded-xl">
      <input
              className="w-full p-2 h-12 rounded-xl bg-slate-200"
              placeholder="Please insert your Email Address"
            />
      </div>

      <div className="bg-red-400 mt-5 p-1 rounded-xl mb-5">
      <textarea
            className="w-full p-2 h-40 rounded-xl bg-slate-200"
            placeholder="Please insert your Email Address"
      />
      </div>
      
      <Button variant="contained" color="success">      
        Send
      </Button>

    </div>
   </div>
          



    
  )
}

export default Mailer