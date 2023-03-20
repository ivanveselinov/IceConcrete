import { Button, CardMedia } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/Firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContextProvider } from '../../context/StateProvider'

const ProjectsRead = () => {

    const [projects, setProjects] = useState();
    const [{appUser}, {products}, dispatch] = useContextProvider();

    useEffect(() => {
        db.collection('project').orderBy('createAt', 'desc').limit(100).onSnapshot(snapshot =>{
            setProjects(snapshot.docs.map(doc => doc.data()))
            console.log(`Data: ${snapshot.docs}`);
        })
    }, [])

            
    const handleDeleteProject = () => {

        if (window.confirm("Are you sure that you wanted to delete Project form??")) {
        
            db.collection('project').limit(1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const documentId = doc.id;

                db.collection('project').doc(documentId).delete().then(() =>{
                    console.log("Document successfully deleted!");
                    console.log(documentId)
                }).catch((error) =>{
                    console.error("Error removing document: ", error);
                })
            })
        }).catch((error) => {
            console.error("Error getting document: ", error);
        })
    } else{
        console.log("Form is not deleted")
        }
    }


  return (
   
    <div className="space-x-10">
        <div className="w-full mt-1 mb-1 ml-1 mr-1 inline-block">
              {projects?.map(({id, uid, postImage, projects, createAt}) =>
                <div className= "w-[45%] ml-10 inline-block mb-2 " key={id}>
                    <div className="w-full flex border rounded-xl"> 
                        <div className="w-1/2 flex">
                            <CardMedia className="ml-2 mt-1 mb-1"
                                    style={{
                                        display : 'flex',
                                        alignItems : 'center',
                                        justifyContent : "center",
                                        width : 300,
                                        height : 300,
                                    }}                   
                                    component="img"
                                    height="194"
                                    image={postImage}
                                    alt={postImage}
                                />
                        </div>
                        <div className="w-1/2 flex ">
                            <div key={id} className="w-full p-2 break-words overflow-auto mb-2 mr-1 h-full bg-slate-400"
                                style={{
                                justifyContent : "center",
                                // width : 400,
                                height : 300,
                                }}
                                >
                                    <p className="text-2xl">{projects}</p>
                            </div>
                        </div>
                        {appUser.uid && (
                        <Button onClick={handleDeleteProject}
                                className="h-10 "
                                variant="outlined" 
                                startIcon={<DeleteIcon />}
                                type='submit'>
                            </Button>
                        )}
                    </div>
                </div>
             )}  
        </div>
    </div>
  )
}

export default ProjectsRead