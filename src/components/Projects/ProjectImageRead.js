import { CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/Firebase';

const ProjectImageRead = () => {

    const [projects, setProjects] = useState();

    useEffect(() => {
        db.collection('project').orderBy('createAt', 'desc').limit(1).onSnapshot(snapshot =>{
            setProjects(snapshot.docs.map(doc => doc.data()))
            console.log(`Data: ${snapshot.docs}`);
        })
    }, [])

    return (

        <div>
            {projects?.map(({id, uid, postImage, createAt}) =>
                <div key={id}>
                   <CardMedia
                        component="img"
                        height="194"
                        image={postImage}
                        alt={postImage}
                    />
                </div>
        )}  
        </div>
      )
}


export default ProjectImageRead

