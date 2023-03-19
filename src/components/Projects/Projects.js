import React from 'react'
import { useContextProvider } from '../../context/StateProvider'
import ProjectImageRead from './ProjectImageRead';
import ProjectsInput from './ProjectsInput'
import ProjectsRead from './ProjectsRead';

const Projects = () => {

  const [{appUser}, dispatch] = useContextProvider();

  return (
    <div className="w-full h-screen bg-slate-600 ">
          <h1 className="text-center p-10 text-4xl">Projects </h1>
          
          {appUser.uid && 
        <div className="w-4/5 m-auto p-1 space-x-2 rounded-xl mb-2 bg-slate-300 shadow-sm">
          <div className="w-4/5 m-auto">
            <ProjectsInput/>
          </div>
       </div>
        } 

        <div className="w-full border-2 bg-white flex space-x-10">
            <div className="w-1/2 mt-1 flex border rounded-xl">
              <div className="mt-1 ml-2 mb-2 mr-1 h-full">
                <ProjectImageRead/>
              </div>
              <div className="p-2 break-words overflow-auto w-1/2 border mt-1 mb-2 mr-1 h-full bg-slate-400"
                style={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : "center",
                  width : 390,
                  height : 300,
                }}>
                <ProjectsRead/>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Projects