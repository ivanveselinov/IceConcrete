import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import {db} from '../../firebase/Firebase';
import { useContextProvider } from '../../context/StateProvider';
import AboutUsDelete from './AboutUsDelete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';


const AboutUsInput = () => {

  const [about, setAbout] = useState('');
  const [appUser, dispatch] = useContextProvider();


  // Insert Into AboutUs
    async function createAboutUs (e) {
        e.preventDefault();

        if (about === "") return;

        const { uid, email } = firebase.auth().currentUser;

        await db.collection('about').add({
            userid:
            uid,
            email,
            about,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        })

        setAbout("");
    }

    // Update AboutUs
    const updateAboutUs  = (e) => {    
     e.preventDefault();
     
     db.collection('about').limit(1).get().then((querySnapshots) => { // Get doc.id
         querySnapshots.forEach((doc) =>{
             const documentId = doc.id
         
     const collectionRef = firebase.firestore().collection('about');
     const docRef = collectionRef.doc(documentId);
 
     docRef.update({
         about: about
         // add other fields and values as needed
       })
       .then(() => {
         console.log('Document successfully updated!');
       })
       .catch((error) => {
         console.error('Error updating document: ', error);
       });
         })
     })
     setAbout("");
    }

    return (
    <div className="w-full space-x-1 flex  max-h-min">
         <textarea
                        className="pb-1 pt-1  p-2 rounded-xl w-1/2 "
                        placeholder='Insert About Us Section Here....'
                        onChange={(e) => setAbout(e.target.value)} value={about}
                        rows="6"
                    />    
        <div className="w-1/6 m-auto p-4 flex space-x-2 ">
            <form onSubmit={createAboutUs}>
                   
                    <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    type='submit'
                    >
                        Send
                    </Button>
            </form>
   
       
            <form onSubmit={updateAboutUs}>
                <div>
                    <Button 
                        variant="contained"
                        type='Update'
                        >Update
                    </Button>
                </div> 
            </form>
        {/* Calling here aboutUs deleted */}

            <AboutUsDelete/> 

        
            </div>
    </div>
  )
}

export default AboutUsInput