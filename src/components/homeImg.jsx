"use client"

import { useEffect, useState } from "react";

const HomeImage = () => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
      const images = [
        'pexels-photo-19621588.jpeg',
        'pexels-photo-20046712.jpeg',
        'pexels-photo-20345530.jpeg',
        'pexels-photo-19862731.jpeg'
      ];
  
      const randomIndex = Math.floor(Math.random() * images.length);
      setImageSrc(images[randomIndex]);
    }, []);
  
  return (
    <>
    <div className='md:h-[35vw] h-[30rem]' style={{ position: 'relative', top: '0', zIndex: '-50', width: '100%' }}>
            <div className='h-full w-full black-overlay'>
              <img className='h-full w-full object-cover' style={{ position: 'relative', zIndex: '-10' }} src={imageSrc} alt="img" />
            </div>
          </div>
    </>
  )
}

export default HomeImage