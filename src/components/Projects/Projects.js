import React from 'react'
import { useContextProvider } from '../../context/StateProvider'
import ProjectImageRead from './ProjectImageRead';
import ProjectsInput from './ProjectsInput'
import ProjectsRead from './ProjectsRead';

const Projects = () => {

  const [{appUser}, dispatch] = useContextProvider();

  return (
    <div className="w-full h-screen ">
          <h1 className="text-center p-10 mt-10 text-4xl">Projects </h1>
          
          {appUser.uid && 
        <div className="w-4/5 m-auto p-1 space-x-2 rounded-xl mb-2 bg-slate-300 shadow-sm">
          <div className="w-4/5 m-auto">
            <ProjectsInput/>
          </div>
       </div>
        } 

      <div className="w-full m-auto mr-2 h-full border-2 flex">
        <div className="w-1/2 mt-1 flex h-1/3 border">
          <div className="w-1/2 border ml-2 mb-2 mr-1 h-full">
            <ProjectImageRead/>
          </div>
          <div className="p-2 break-words overflow-auto w-1/2 border mr-2 mb-2 mr-1 h-full">
            <ProjectsRead/>
          </div>
        </div>

      </div>

      
    </div>
  )
}

export default Projects