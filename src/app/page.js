"use client"
import Hero from '@/components/Hero'
import Main from '@/components/Main'
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [smallScreen, setSmallScreen] = useState(false);

  const handleSmallScreen = () => {
    setSmallScreen(!smallScreen);
    const body = document.body;
    body.style.backgroundColor = smallScreen ? "initial" : "black";
  };

  useEffect(() => {
    const images = [
      'pexels-photo-19621588.jpeg',
      'pexels-photo-20046712.jpeg',
      'pexels-photo-20345530.jpeg'
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    setImageSrc(images[randomIndex]);
  }, []);


  return (
    <>
      <NavBar smallScreen={smallScreen} handleSmallScreen={handleSmallScreen}/>
      {!smallScreen && <div className='md:h-[70%] h-[58%]' style={{ position: 'absolute', top: '0', zIndex: '-50', width: '100%' }}>
        <div className='h-full w-full black-overlay'>
          <img className='h-full w-full object-cover' style={{ position: 'relative', zIndex: '-10' }} src={imageSrc} alt="img" />
        </div>
      </div>}
      {!smallScreen && <Hero/>}
      {!smallScreen && <Main/>}
      
    </>
  )
}

export default Page;
