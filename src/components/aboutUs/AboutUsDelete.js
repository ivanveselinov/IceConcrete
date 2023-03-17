import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/Firebase';
import firebase from 'firebase';

const AboutUsDelete = () => {

    const [about] = useState();

    const handleDeleteAbout = (about) => {
    
        db.collection('about').limit(1).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const documentId = doc.id;
                db.collection('about').doc(documentId).delete().then((snapshots) => {
                    console.log("Document successfully deleted!");
                }).catch((error) => {
                    console.error("Error removing document: ", error);
                });
            });
        }).catch((error) => {
            console.error("Error getting document: ", error);
        });   
    }

    useEffect (() =>{

    }, [about])

    return (
    <div className="w-20 h-20 border " onClick={handleDeleteAbout}>
         <button 
                type='submit'
                className="w-20 h-20">
                Delete
                </button>
    </div>
  )
}

export default AboutUsDelete




  



