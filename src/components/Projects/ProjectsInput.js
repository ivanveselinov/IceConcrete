import React, { useState } from 'react'
import firebase from 'firebase';
import { db } from '../../firebase/Firebase';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ProjectsInput = () => {

    const [projects, setProjects] = useState('');

    async function createProjects (e) {
        e.preventDefault();

        if (projects === "") return;

        const { uid, email } = firebase.auth().currentUser;

        await db.collection('project').add({
            userid:
            uid,
            email,
            projects,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

  return (


    <div>
        <textarea
            className="p-2 rounded-xl w-full"
            placeholder='Insert About Us Section Here....'
            onChange={(e) => setProjects(e.target.value)} value={projects}
            rows="5"
        /> 

        <form onSubmit={createProjects}>
            <Button 
                className="h-10"
                variant="contained" 
                endIcon={<SendIcon />}
                type='submit'
                >
                Send
            </Button>
        </form>    
    </div>
  
     )
    }


export default ProjectsInput