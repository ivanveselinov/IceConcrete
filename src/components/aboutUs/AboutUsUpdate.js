import React, { useState } from 'react'
import { db } from '../../firebase/Firebase';
import firebase from 'firebase';
import { SettingsBackupRestore } from '@mui/icons-material';

const AboutUsUpdate = () => {

    const [about, setAbout] = useState();

   const updateDocument  = (e) => {
    e.preventDefault();
    

    db.collection('about').limit(1).get().then((querySnapshots) => { // Get doc.id
        querySnapshots.forEach((doc) =>{
            const documentId = doc.id
        
    const collectionRef = firebase.firestore().collection('about');
    const docRef = collectionRef.doc(documentId);

    docRef.update({
        about: 'Test'
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
   }


  return (
    <div>
          <form onSubmit={updateDocument}>
            <div>
                <input
                    className='w-60 pb-1 pt-1 mt-1 p-2 rounded-xl bg-green-300'
                    placeholder='Update....'
                    onChange={(e) => setAbout(e.target.value)}
                    rows="3"
                />
                <button 
                    type='submit'
                    className="w-20 h-20">
                    Update
                </button>
            </div>
        </form>
    </div>
  )
}

export default AboutUsUpdate