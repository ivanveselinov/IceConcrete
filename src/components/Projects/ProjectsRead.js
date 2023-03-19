import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/Firebase';

const ProjectsRead = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        db.collection('project').orderBy('createAt', 'desc').limit(100).onSnapshot(snapshot =>{
            setProjects(snapshot.docs.map(doc => doc.data()))
            console.log(`Data: ${snapshot.docs}`);
        })
    }, [])

  return (

    <div className="w-full p-2 h-full">    
            {projects?.map(({id, uid, postProjectImage, projects, createAt}) =>
                <div key={id}>
                    <p className="text-2xl">{projects}</p>
                </div>
        )}
    </div>

  )
}

export default ProjectsRead