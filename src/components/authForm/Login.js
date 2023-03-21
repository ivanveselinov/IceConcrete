import React from 'react'
import Button from '@mui/material/Button';

//mui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import HttpsIcon from '@mui/icons-material/Https';

const ariaLabel = { 'aria-label': 'description' };

const Login = (props) => {

    const {
      email, 
       setEmail,
        password, 
         setPassword,
          handleLogin,
            handleSignup,
             hasAccount, 
              setHasAccount, 
               emailError, 
                passwordError
            } = props;

    return (

        <selection>
          
        <div className="flex mt-10 ml-20">
          <p className='p-3 '><AccountCircleIcon sx={{ fontSize: 30 }}/>User name:
          </p>
          <Input 
            className=" h-10 mt-2 text-xl"
            placeholder="noname@gmail.com"
            type="text" 
            autoFocus 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            inputProps={ariaLabel} 

            />
            <p className="bg-red-500 mt-2">{emailError}</p>
          </div>

          <div className="flex mt-10  ml-20 m-auto">
            <label className="text-2xl p-2 "><HttpsIcon sx={{ fontSize: 30 }}/>Password: </label>
           
            <Input
            className="bg-white-100"
            placeholder="Password"
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            inputProps={ariaLabel} 
            />

            <p className="bg-red bg-red-500 mt-2">{passwordError}</p>  
          
          </div>
          

          <div  className="text-center w-full mt-1 ">
               {hasAccount ? (    // on click switch on sign in and sign up
                   <> 
                   <Button variant="outlined" onClick={handleSignup}>Sign Up</Button>
                   <p className="p-2">Have an account ?<Button onClick={() => setHasAccount(!hasAccount)} variant="outlined"> Sign in </Button></p> 
                   </>
                 ) : ( 
                   <>
                 <Button variant="outlined" onClick={handleLogin}>Sign In</Button>
                 <p>Don't have an account ? <Button variant="outlined" onClick={() => setHasAccount(!hasAccount)}>Sign Up</Button></p>
                  </>
               )}
            </div>

        </selection>   
    )
}

export default Login
