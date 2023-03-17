import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import {db} from '../../firebase/Firebase';
import { useContextProvider } from '../../context/StateProvider';

const AboutUsInput = () => {

  const [about, setAbout] = useState('');
  const [appUser, dispatch] = useContextProvider();


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

    return (
    <div>
        <form onSubmit={createAboutUs}>
            <div>
                <input
                    className='w-60 pb-1 pt-1 mt-1 p-2 rounded-xl bg-green-300'
                    placeholder='Message....'
                    onChange={(e) => setAbout(e.target.value)} value={about}
                    rows="3"
                />
                <button 
                    type='submit'
                    className="w-20 h-20">
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default AboutUsInput