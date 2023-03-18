import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/Firebase';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const AboutUsDelete = () => {

    const [about] = useState();

    const handleDeleteAbout = (about) => {
        if (window.confirm("Are you sure that you wanted to delete About Us form??")) {
            db.collection('about').limit(1).get().then((querySnapshot) => {  // get .doc(id)
                querySnapshot.forEach((doc) => {
                    const documentId = doc.id;
                    db.collection('about').doc(documentId).delete().then((snapshots) => { // Delete
                        console.log("Document successfully deleted!");
                    }).catch((error) => {
                        console.error("Error removing document: ", error);
                    });
                });
            }).catch((error) => {
                console.error("Error getting document: ", error);
            });   
        }
}
    useEffect (() =>{

    }, [about])

    return (
    <div onClick={handleDeleteAbout}>
        <Button 
        className="h-10"
        variant="outlined" 
        startIcon={<DeleteIcon />}
        type='submit'>
             Delete
        </Button>
    </div>
  )
}

export default AboutUsDelete




  



