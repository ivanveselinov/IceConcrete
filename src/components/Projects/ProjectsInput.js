import React, { useRef, useState } from 'react'
import firebase from 'firebase';
import { db, storage } from '../../firebase/Firebase';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useContextProvider } from '../../context/StateProvider';

const ProjectsInput = () => {

    const [projects, setProjects] = useState('');
    const [postImage, setPostImage] = useState();
    const [{appUser}, dispatch] = useContextProvider();
    const fileRef = useRef(null);

    async function createProjects (e) {
        e.preventDefault();

        if (projects === "") return;

        const { uid, email } = firebase.auth().currentUser;

        await db.collection('project').add({
            user: appUser?.email,
            userid: appUser.uid,
            projects: projects,
            createAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then((doc) =>{
            if (postImage) {
                const uploadTask = storage
                .ref(`project/${doc.id}`)
                .putString(postImage, "data_url");

                removeImage();

                uploadTask.on(
                    "state_change",
                    null,
                    (error) => console.log(error),
                    () => {
                        storage
                        .ref('project')
                        .child(doc.id)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection('project').doc(doc.id).set(
                                {
                                  postImage: url,
                                },
                                {merge: true}
                            )
                        })
                    }
                )

            }
        })

        setProjects("");
    }

    // Remove Image from Input

    const removeImage = () => {
      setPostImage(null);
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
          setPostImage(readerEvent.target.result)
        }
    }

    // Update Projects

    const updateProjects = (e) => {
        e.preventDefault();

        db.collection('project').limit(100).get().then((querySnapshots) => {
            querySnapshots.forEach((doc) =>{
            const documentId = doc.id
    
            const collectionRef = firebase.firestore().collection('project');
            const docRef = collectionRef.doc(documentId);
            
            docRef.update({
                projects: projects
            })
            .then(() =>{
                console.log('Document successfully updated!');
            })
            .catch((error) => {
              console.error('Error updating document: ', error);
            })

                })
            })

            setProjects("")
    }

  return (


    <div className="flex">
      <div className="w-full p-1 space-x-1 ">
         <textarea
                        className="p-2 rounded-xl w-full"
                        placeholder='Insert About Us Section Here....'
                        onChange={(e) => setProjects(e.target.value)} value={projects}
                        rows="5"
                    />    
      </div>

        <div className="w-full m-auto p-4 flex space-x-2 ">
           
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

            <form onSubmit={updateProjects}>
                <div>
                    <Button 
                        className="h-10"
                        variant="contained"
                        type='submit'
                        >
                          Update
                    </Button>
                </div> 

            </form>

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


export default ProjectsInput