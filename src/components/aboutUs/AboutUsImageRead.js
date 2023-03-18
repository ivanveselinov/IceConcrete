import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/Firebase';
import { CardMedia } from '@mui/material';


const AboutUsImageRead = () => {

    const [about, setAbout] = useState();


    useEffect(() => {
        db.collection('about').orderBy('createAt', 'desc').limit(1).onSnapshot(snapshot =>{
            setAbout(snapshot.docs.map(doc => doc.data()))
            console.log(`Data: ${snapshot.docs}`);
        })
    }, [])


 return (
    
    <div className="w-full p-2 h-full">    
        {about?.map(({ id, uid, email, about, postImage ,createAt}) =>
            <div key={about.id}>
                  <CardMedia
                    component="img"
                    height="194"
                    className="h-56 md:h-96"
                    image={postImage}
                    alt={postImage}
                />
            </div>
    )}
    </div>
  )
}
export default AboutUsImageRead