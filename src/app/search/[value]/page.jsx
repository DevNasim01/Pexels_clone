"use client"
import NavBar from '@/components/NavBar';
import Photo from '@/components/Photo';
import React, { useEffect, useState } from 'react';

const Page = ({params}) => {
  const [mainpage, setmainpage] = useState(false)
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState('');
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [firstRequestComplete, setFirstRequestComplete] = useState(true);

  const fnlValue = searchValue || params.value;
  useEffect(() =>{
    setmainpage(true);
    setLoading(true)
  },[])

  const fetchPhotos = async (pageNumber) => {
    try {
      console.log("requested")
      const response = await fetch(`/api/searchPhoto?query=${fnlValue}&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch photo');
      }
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setPhotoList((prevPhotos) => [...prevPhotos, ...data.photos]);
        setFirstRequestComplete(true);
      } else {
        setNotFound('No photos found');
      }
    } catch (error) {
      console.error('Error fetching photo:', error.message);
      setError('Failed to load photos. Please check your network connection.');
    }
  };

  useEffect(() => {
    if (!firstRequestComplete) { // Check if the first request is complete before making subsequent requests
      return;
    }
    setLoading(true);
    fetchPhotos(page);
    setFirstRequestComplete(false);
  }, [page, searchValue]);

  useEffect(() => {
    const handleScroll = () => {
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >
          document.documentElement.scrollHeight
        ) {
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.log('Error fetching photos:', error.message);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const images = document.querySelectorAll('img');
  //   const promises = [];
  //   images.forEach((image) => {
  //     promises.push(
  //       new Promise((resolve) => {
  //         image.onload = resolve;
  //         image.onerror = resolve;
  //       })
  //     );
  //   });

  //   Promise.all(promises).then(() => {
  //     setLoading(false);
  //   });
  // }, [photoList]);


  const handleSearchSubmit = (value) => {
    setSearchValue(value);
    // Reset photoList, error, notFound, and page when a new search is submitted
    setPhotoList([]);
    setError('');
    setNotFound('');
    setPage(1);
  };

  const halfLength = Math.ceil(photoList.length / 2);
  const firstHalf = photoList.slice(0, halfLength);
  const secondHalf = photoList.slice(halfLength);

  const triceLength = Math.ceil(photoList.length / 3);
  const firstTrice = photoList.slice(0, triceLength);
  const secondTrice = photoList.slice(triceLength, triceLength * 2);
  const thirdTrice = photoList.slice(triceLength * 2);

  return (
    <>
    <NavBar mainpage={mainpage} onSearchSubmit={handleSearchSubmit}/>
    <div className='text-[4vw] text-black font-semibold relative px-5 md:mx-[2.5vw] mt-20 md:mt-[8vw] py-10 md:py-[2.5vw] capitalize'>{fnlValue} Images</div>
    {error ? (
          <div className='text-[2vw]'>{error}</div>
        ) : notFound ? (
          <div className='text-[2vw]'>{notFound}</div>
        ) : (         
            <>
            <main className="w-full md:mt-5 px-5 md:px-[2.5vw]">
              <div className="md:hidden w-full flex gap-4">
                <div className="w-full ">
                  {firstHalf.map((photo, index) => (
                    <Photo key={index} srcSet={photo.src} alt={photo.alt} />
                  ))}
                </div>
                <div className="w-full">
                  {secondHalf.map((photo, index) => (
                    <Photo key={index} srcSet={photo.src} alt={photo.alt} />
                  ))}
                </div>
              </div>

              <div className="hidden md:flex w-full gap-4">
                <div className="w-full">
                  {firstTrice.map((photo, index) => (
                    <Photo key={index} srcSet={photo.src} alt={photo.alt} />
                  ))}
                </div>
                <div className="w-full ">
                  {secondTrice.map((photo, index) => (
                    <Photo key={index} srcSet={photo.src} alt={photo.alt} />
                  ))}
                </div>
                <div className="w-full ">
                  {thirdTrice.map((photo, index) => (
                    <Photo key={index} srcSet={photo.src} alt={photo.alt} />
                  ))}
                </div>
              </div>
            </main>
            {loading && <div className='text-center w-full text-black text-[2vw] py-2'>Loading...</div>}
            </>
                     
        )}
    </>
  );
};

export default Page;
