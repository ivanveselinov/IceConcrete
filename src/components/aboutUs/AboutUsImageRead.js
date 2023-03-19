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
    
    <div className="p-2">    
        {about?.map(({ id, uid, email, about, postImage ,createAt}) =>
            <div key={about.id}>
                  <CardMedia
                  style={{
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : "center",
                  width : 500,
                  height : 420,
                }}
                    component="img"
                    image={postImage}
                    alt={postImage}
                    className="rounded-2xl"
                />
            </div>
    )}
    </div>
  )
}
export default AboutUsImageRead