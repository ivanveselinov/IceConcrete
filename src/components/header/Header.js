import React, { useEffect, useState } from 'react'
import { useContextProvider } from '../../context/StateProvider'
import firebase from "firebase";
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { dark } from '@mui/material/styles/createPalette';
import { Margin } from '@mui/icons-material';

const Header = () => {

  const [{appUser}, dispatch] = useContextProvider(); 
  const [theme, setTheme] = useState("system");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement
  console.log(darkQuery, "DarkQuery")

  const options = [
    {
      icon:"sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    }
  ];

  function onWindowMatch () {

  if(localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)
  ){
    element.classList.add("dark")
  }else{
    element.classList.remove("dark")
  }
}

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      
      case "dark":
        element.classList.add("dark")
        localStorage.setItem('theme', 'dark')
        break;

        case "light":
          element.classList.remove("dark")
          localStorage.setItem("theme", "light")
          break;

          case "system":
            element.classList.add("system")
            localStorage.setItem("theme", "system")
            break;

            default:
              localStorage.remove("theme")
              break;
    }
  }, [theme])

  darkQuery.addEventListener("change", (e) => {
    if(!("theme" in localStorage)) {
      if(e.matches) {
        element.classList.add("dark")
      }else{
        element.classList.remove("dark")
      }
    }
  })

  const signOutUser = () => {
    firebase.auth().signOut();
    dispatch({
      type: "user",
      payload: {},
    })
  };

 

  const icons = " mb-2"
  const hoverHeader = "hover:text-blue-300"

  return (
  // <Fade top duration={3000}>
    <div className="z-30 w-full fixed h-32 inline-flex border-r justify-between bg-orange-600 rounded-t-xl xs:block sm:block md:inline-flex"> 

      
        {/* If User is not logged in DONT DISPLAY WELCOME!! */}
        {appUser.uid &&
        <div className="w-1/4">
          <p className="break text-3xl p-2 xs:hidden sm:hidden md:block lg:text-3xl">Welcome back</p>
         <div className=" xs:hidden sm:hidden md:flex">
          <Avatar src="/broken-image.jpg"/>
          <p className="p-1 text-2xl ">{appUser.email}</p>
        </div>
        </div>
        }

        <div className="text-center flex m-auto space-x-20 xs:w-3/4 xs:space-x-5 xs:text-sm xs:mt-5 md:mt-10 md:space-x-20 md:w-1/2 md:text-xl xl:text-2xl xl:w-1/2 "> 

      
          <AnchorLink href="#home" className={hoverHeader} ><HomeIcon sx ={{ fontSize: 30 }}  className={icons}/>Home</AnchorLink>
          <AnchorLink href="#aboutUs" className={hoverHeader}><PeopleIcon sx ={{ fontSize: 30 }} className={icons}/>About Us</AnchorLink>
          <AnchorLink href="#projects" className={hoverHeader}><EngineeringIcon sx ={{ fontSize: 30 }} className={icons}/>Projects</AnchorLink>
          <AnchorLink href="#contactUs" className={hoverHeader}><RecentActorsIcon sx ={{ fontSize: 30 }} className="mb-1"/>Contact Us</AnchorLink>
            <div className="bg-slate-200 dark:text-gray-100 dark:bg-slate-900 duration-100 xs:hidden sm:hidden md:block">
              <div className="fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded xs:w-10 md:w-auto lg:w-auto xl:w-auto">
                {
                  options?.map(opt => (
                  <button
                    key={opt.text} 
                    onClick={() => setTheme(opt.text)}
                    className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600  
                    ${theme === opt.text && 'text-sky-900'}`}>
                    <ion-icon name={opt.icon}></ion-icon>
                  </button>
                  ))
                }
              </div>
            </div>
        </div>

        {/* If User is not logged in DONT DISPLAY LOGOUT!! */}
        {appUser.uid &&
        <button className="block w-1/7 space-x-1 xs:text-sm xs:flex xs:space-x-24 xs:m-auto space-x-auto sm:text-sm sm:flex md:mt-14 md:block" on onClick={signOutUser}>
               <p className="p-1 mt-5 text-2xl xs:text-sm sm:text-sm md:hidden">Welcome Back</p>
               <p className="p-1 mt-5 text-2xl xs:text-sm  sm:text-sm md:hidden">{appUser.email}</p>
          <p className="p-1 text-xl mt-5 mr-2  xs:text-sm sm:text-sm md:text-xl ">Logout<LogoutIcon/></p>
        </button>
}

    </div>
  // </Fade>
  )
}

export default Header