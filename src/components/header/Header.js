import React from 'react'
import { useContextProvider } from '../../context/StateProvider'
import firebase from "firebase";
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {

  const [{appUser}, dispatch] = useContextProvider(); 

  const signOutUser = () => {
    firebase.auth().signOut();
    dispatch({
      type: "user",
      payload: {},
    })
  };

  return (
    <div className='w-full h-36 inline-flex border border-r bg-cyan-100 justify-between'> 
        
        {/* If User is not logged in DONT DISPLAY WELCOME!! */}
        {appUser.uid &&
        <div className='w-1/4 border bg-lime-700'>
          <p className='Break text-3xl text-center p-2'>Welcome back {appUser.email}</p>
        </div>
        }

        <div className='w-ful text-center flex space-x-5 m-auto text-2xl '> 
          <p>Home</p>
          <p>About Us</p>
          <p>Projects</p>
          <p>Contact Us</p>
        </div>

        {/* If User is not logged in DONT DISPLAY LOGOUT!! */}
        {appUser.uid &&
        <div className=' p-2 w-1/7 border-2 flex space-x-1'  on onClick={signOutUser}>
          <p className='p-2 text-xl'>Logout<LogoutIcon/></p>
        </div>
}

    </div>
  )
}

export default Header