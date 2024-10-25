import React from 'react'
import "./gallery.css"

import Img1 from './img/1.jpeg'
import Img2 from './img/2.jpeg'
import Img3 from './img/3.jpeg'
import Img4 from './img/4.jpeg'

const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
    ]

  return (
   <>
   <div className='gallery'>
     {data.map((item) => (
       <div key={item.id} className='pics'>
         <img src={item.imgSrc} alt='' style={{width: "100%"}} />
       </div>
     ))}
   </div>
   </>
  )
}

export default Gallery