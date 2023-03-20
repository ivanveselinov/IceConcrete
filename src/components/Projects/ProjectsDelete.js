// import { Button } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { db } from '../../firebase/Firebase';

// const ProjectsDelete = () => {

//     const [projects] = useState();

//     const handleDeleteProject = (about) => {
//         if (window.confirm("Are you sure that you wanted to delete Project form??")) {
//         db.collection('project').limit(1).get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 const documentId = doc.id;
//                 db.collection('project').doc(documentId).delete().then((snapshots) =>{
//                     console.log("Document successfully deleted!");
//                 }).catch((error) =>{
//                     console.error("Error removing document: ", error);
//                 })
//             })
//         }).catch((error) => {
//             console.error("Error getting document: ", error);
//         })
//     }
//     }

//     useEffect (() =>{

//     }, [projects])

//   return (  
    
//     <div onClick={handleDeleteProject}>
//         <Button 
//             className="h-10"
//             variant="outlined" 
//             startIcon={<DeleteIcon />}
//             type='submit'>
//                 Delete
//         </Button>
//     </div>
//   )
// }

// export default ProjectsDelete