import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase';
import {db, storage} from '../../firebase/Firebase';
import { useContextProvider } from '../../context/StateProvider';
import AboutUsDelete from './AboutUsDelete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const AboutUsInput = () => {

  const [about, setAbout] = useState('');
  const [appUser, dispatch] = useContextProvider();
  const [postImage, setPostImage] = useState(); 
  const fileRef = useRef(null);

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
        }).then((doc) => {
          if (postImage) {
            const uploadTask = storage 
            .ref(`about/${doc.id}`)
            .putString(postImage, "data_url");

            removeImage();

            uploadTask.on(
              "state_change",
              null,
              (error) => console.log(error),
              () => {
                storage 
                .ref('about')
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection('about').doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    {merge: true}
                  )
                }) 
              }
            )
          }
          // descriptionRef.current.value = "";
          // priceRef.current.value = "";
          // setCategory("defaultCategory");
          // setLoading(false); //disable
        })

        setAbout("");
    }

    // Remove Image from input
    const removeImage = () => {
      setPostImage(null);
    }

    // Handle Image Upload

    const addImageToPost = (e) => {
      const reader = new FileReader();
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onload = (readerEvent) => {
        setPostImage(readerEvent.target.result);
       }
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
    <div className="flex">
      <div className="w-full p-1 space-x-1 ">
         <textarea
                        className="p-2 rounded-xl w-full"
                        placeholder='Insert About Us Section Here....'
                        onChange={(e) => setAbout(e.target.value)} value={about}
                        rows="5"
                    />    
      </div>

   

        <div className="w-full m-auto p-4 flex space-x-2 ">
           
            <form onSubmit={createAboutUs}>
        
                    <Button 
                    className="h-10"
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
                        className="h-10"
                        variant="contained"
                        type='Update'
                        >
                          Update
                    </Button>
                </div> 

            </form>
        {/* Calling here aboutUs deleted */}
            <AboutUsDelete/> 

           {/* Photos Upload */}

           {postImage && (
            <div
              onClick={removeImage}
              className="flex flex-col filter hover:brightness-90 transition duration-150 transform hover:scale-95 cursor-pointer"
            >
              <img
                loading="lazy"
                src={postImage}
                alt="postImage"
                className="h-9 object-contain "
              />
            </div>
          )}
       
          {/* Photo button */}
          <div
            className="mt-2 inputBtn rounded-bl-lg flex justify-center  w-1/5 "
            onClick={() => fileRef.current.click()}
          >
            <p className="flex space-x-2">
              <PhotoCameraIcon />{" "}
              <p className=" hidden sm:inline-flex text-xs font-semibold text-gray-600 sm:text-sm xl:text-base">
                Photo
              </p>
            </p>
            <input type="file" hidden ref={fileRef} onChange={addImageToPost} />
        </div>
      </div>
    </div>
  )
}

export default AboutUsInput