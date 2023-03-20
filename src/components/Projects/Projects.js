import React from 'react'
import { useContextProvider } from '../../context/StateProvider'
import ProjectsInput from './ProjectsInput'
import ProjectsRead from './ProjectsRead';

const Projects = () => {

  const [{appUser}, dispatch] = useContextProvider();

  return (
    <div className="w-full bg-slate-600 ">
          <h1 className="text-center p-10 text-4xl">Projects </h1>
          
       {appUser.uid && 
        <div className="w-4/5 m-auto p-1 space-x-2 rounded-xl mb-2 bg-slate-300 shadow-sm">
          <div className="w-4/5 m-auto">
            <ProjectsInput/>
          </div>
       </div>
        } 

        <div className="w-full bg-white  space-x-10">
          <div className="w-full border-2 bg-slate-400 "> 
          <ProjectsRead
              />
          
        </div>
      </div>
    </div>
  )
}

export default Projects