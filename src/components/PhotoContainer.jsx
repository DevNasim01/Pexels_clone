"use client";
import React, { useContext, useEffect, useState } from "react";
import Photo from "./Photo";

const PhotoContainer = () => {
  const [photoList, setPhotoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState("");
  const [page, setPage] = useState(1);
  const [firstRequestComplete, setFirstRequestComplete] = useState(true);

  const fetchPhotos = async (pageNumber) => {
    try {
      const response = await fetch(`/api/getPhoto?page=${pageNumber}`);
      if (!response.ok) {
        throw new Error("Failed to fetch photo");
      }
      const data = await response.json();
      if (data.photos && data.photos.length > 0) {
        setPhotoList((prevPhotos) => [...prevPhotos, ...data.photos]);
        setFirstRequestComplete(true);
      } else {
        setNotFound("No photos found");
      }
    } catch (error) {
      console.error("Error fetching photo:", error.message);
      setError("Failed to load photos. Please check your network connection.");
    }
  };

  useEffect(() => {
    if (!firstRequestComplete) {
      // Check if the first request is complete before making subsequent requests
      return;
    }
    setLoading(true);
    fetchPhotos(page);
  }, [page]);

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
        console.log("Error fetching photos:", error.message);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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

  const halfLength = Math.ceil(photoList.length / 2);
  const firstHalf = photoList.slice(0, halfLength);
  const secondHalf = photoList.slice(halfLength);

  const triceLength = Math.ceil(photoList.length / 3);
  const firstTrice = photoList.slice(0, triceLength);
  const secondTrice = photoList.slice(triceLength, triceLength * 2);
  const thirdTrice = photoList.slice(triceLength * 2);

  console.log(photoList.length)
  console.log(triceLength.length);
  console.log(secondTrice.length)
  console.log(thirdTrice.length)
  return (
    <>
      <section className="text-black max-h-full flex flex-col items-center text-xs lg:text-[1vw] font-medium px-[5vw] md:px-[3vw] mt-[1vw]">
        <div className="flex">
          <p className="md:px-[2vw] px-4 cursor-pointer py-4 md:py-[1.2vw] rounded-full hover:bg-black hover:text-white">
            Videos
          </p>
          <p className="md:px-[2vw] px-4 cursor-pointer py-4 md:py-[1.2vw] rounded-full hover:bg-black hover:text-white">
            Home
          </p>
          <p className="md:px-[2vw] px-4 cursor-pointer py-4 md:py-[1.2vw] rounded-full hover:bg-black hover:text-white">
            Leaderboard
          </p>
          <p className="md:px-[2vw] px-4 cursor-pointer py-4 md:py-[1.2vw] rounded-full hover:bg-black hover:text-white">
            Challenges
          </p>
        </div>

        <div className="flex justify-between items-center w-full md:mt-[1vw]">
          <div className="py-5 text-base md:text-[2.5vw] font-medium tracking-tight">
            Free Stock Photos
          </div>
          <button className="md:px-[2vw] px-5 py-2.5 md:py-0 md:h-[4.5vw] text-balance md:text-[1.2vw] rounded-md font-medium border-2 flex items-center gap-2">
            Tranding <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        {error ? (
          <div className="text-[2vw]">{error}</div>
        ) : notFound ? (
          <div className="text-[2vw]">{notFound}</div>
        ) : (
          <>
            {/* <main className='w-full mt-[3vw] grid grid-cols-2 md:grid-cols-3 gap-4'>
            {photoList.map((photo, index) => (
              <Photo key={photo.id} srcSet={photo.src} alt={photo.alt} />
            ))}
            </main>  */}
            <main className="w-full md:mt-5">
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
            {loading && (
              <div className="text-center w-full text-black text-[2vw] py-2">
                Loading...
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default PhotoContainer;
