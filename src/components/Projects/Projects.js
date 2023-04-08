import React from 'react'
import { useContextProvider } from '../../context/StateProvider'
import ProjectsInput from './ProjectsInput'
import ProjectsRead from './ProjectsRead';
import Fade from 'react-reveal/Fade';


const Projects = () => {

  const [{appUser}, dispatch] = useContextProvider();

  return (
  <Fade duration={5000}>
    <div className="w-full pt-24" id="projects">
          <h1 className="text-center p-10 text-4xl xs:text-2xl md:text-2xl lg:text-2xl xl:text-4xl">Projects </h1>
          
       {appUser.uid && 
        <div className="w-1/3 p-1 space-x-2 m-auto rounded-xl mb-2 shadow-sm bg-slate-400">
          <div className=" w-full">
            <ProjectsInput/>
          </div>
       </div>
        } 

        <div className="w-full space-x-10">
          <div className="w-full border-b-2"> 
          <ProjectsRead
              />
        </div>
      </div>
    </div>
  </Fade>
  )
}

export default Projects