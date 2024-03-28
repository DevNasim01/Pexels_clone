"use client"
import React, { useContext, useEffect, useState } from 'react'
import Photo from './Photo'

const PhotoContainer = () => {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState('');
  const [page, setPage] = useState(1);

  const fetchPhotos = async (pageNumber) => {
    try {
      const response = await fetch(`/api/getPhoto?page=${pageNumber}`); 
      if (!response.ok) {
        throw new Error('Failed to fetch photo');
      }
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setPhotoList(prevPhotos => [...prevPhotos, ...data.photos])
      } else {
        setNotFound('No photos found');
      }
    } catch (error) {
      console.error('Error fetching photo:', error.message);
      setError('Failed to load photos. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    setLoading(true)
    fetchPhotos(page);
  },[]);

  
  const handleScroll = () => {
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
        setPage(prevPage => prevPage + 1);
        setLoading(false)
      }

    } catch (error) {
      console.log('Error fetching photos:', error.message);
    }
  };

  

  useEffect(() => {
    setLoading(true)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <section className='text-black max-h-full flex flex-col items-center text-xs md:text-sm font-medium px-5 md:px-24 mt-5'>
        <div className='flex'>
            <p className='md:px-7 px-4 cursor-pointer py-4 md:py-4 rounded-full hover:bg-black hover:text-white'>Videos</p>
            <p className='md:px-7 px-4 cursor-pointer py-4 md:py-4 rounded-full hover:bg-black hover:text-white'>Home</p>
            <p className='md:px-7 px-4 cursor-pointer py-4 md:py-4 rounded-full hover:bg-black hover:text-white'>Leaderboard</p>
            <p className='md:px-7 px-4 cursor-pointer py-4 md:py-4 rounded-full hover:bg-black hover:text-white'>Challenges</p>
        </div>

        <div className='flex justify-between items-center w-full md:mt-5'>
            <div className='py-5 text-xl md:text-2xl font-medium tracking-tight'>Free Stock Photos</div>
            <button className='md:px-7 px-6 h-12 md:py-7 text-xs md:text-base rounded-md font-medium border-2 flex items-center gap-2'>Tranding <i className="fa-solid fa-chevron-down"></i></button>
        </div>


        {error ? (
          <div className='text-2xl'>{error}</div>
        ) : notFound ? (
          <div className='text-2xl'>{notFound}</div>
        ) : (         
            <>
            <main className='w-full mt-5 md:columns-3 columns-2'>
            {photoList.map((photo, index) => (
              <Photo key={index} src={photo.src.original} alt={photo.alt} />
            ))}
            </main> 
            {loading && <div className='text-center w-full text-black text-2xl'>Loading...</div>}
            </>
                     
        )}

    </section>
    </>
  )
}

export default PhotoContainer