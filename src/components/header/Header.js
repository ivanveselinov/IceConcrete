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
    <div className='w-full h-36 inline-flex border border-r justify-between bg-gradient-to-r from-orange-600 to-blue-600'> 
        
        {/* If User is not logged in DONT DISPLAY WELCOME!! */}
        {appUser.uid &&
        <div className="lg: w-1/4">
          <p className=' break text-3xl p-2'>Welcome back</p>
         <div className='flex'>
          <Avatar className='' src="/broken-image.jpg" />
          <p className='p-1 text-2xl'>{appUser.email}</p>
        </div>
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
        <button className=' p-2 w-1/7 flex space-x-1' on onClick={signOutUser}>
          <p className='p-2 text-xl'>Logout<LogoutIcon/></p>
        </button>
}

    </div>
  )
}

export default Header