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

  const fnlValue = searchValue || params.value;
  useEffect(() =>{
    setmainpage(true);
  },[])

  const fetchPhotos = async (pageNumber) => {
    try {
      const response = await fetch(`/api/searchPhoto?query=${fnlValue}&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch photo');
      }
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setPhotoList((prevPhotos) => [...prevPhotos, ...data.photos]);
      } else {
        setNotFound('No photos found');
      }
    } catch (error) {
      console.error('Error fetching photo:', error.message);
      setError('Failed to load photos. Please check your network connection.');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPhotos(page);
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

  useEffect(() => {
    const images = document.querySelectorAll('img');
    const promises = [];
    images.forEach((image) => {
      promises.push(
        new Promise((resolve) => {
          image.onload = resolve;
          image.onerror = resolve;
        })
      );
    });

    Promise.all(promises).then(() => {
      setLoading(false);
    });
  }, [photoList]);


  const handleSearchSubmit = (value) => {
    setSearchValue(value);
    // Reset photoList, error, notFound, and page when a new search is submitted
    setPhotoList([]);
    setError('');
    setNotFound('');
    setPage(1);
  };
  return (
    <>
    <NavBar mainpage={mainpage} onSearchSubmit={handleSearchSubmit}/>
    <div className='text-5xl text-black font-semibold md:top-24 px-5 md:mx-10 mt-20 py-10 capitalize'>{fnlValue} Images</div>
    {error ? (
          <div className='text-2xl'>{error}</div>
        ) : notFound ? (
          <div className='text-2xl'>{notFound}</div>
        ) : (         
            <>
            <main className='w-full mt-5 md:columns-3 columns-2 px-5'>
            {photoList.map((photo) => (
              <Photo key={photo.id} src={photo.src.original} alt={photo.alt} />
            ))}
            </main> 
            {loading && <div className='text-center w-full text-black text-2xl'>Loading...</div>}
            </>
                     
        )}
    </>
  );
};

export default Page;
