"use client"
import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Placeholder from "./placeholder";
const Photo = ({ srcSet, alt }) => {
  if (typeof srcSet !== 'object' || srcSet === null) {
    // Handle the case where srcSet is not provided or is not an object
    return null; // or return a placeholder, error message, or default image
  }
  
  const srcSetString = Object.entries(srcSet)
    .filter(([key]) => key !== "original")
    .map(([key, value]) => {
      const url = new URL(value);
      const width = url.searchParams.get("w") || "auto"; // Default to "auto" if width is not provided
      return `${value} ${width}w`;
    })
    .join(", ");

  return (
    <article className='w-full mb-4 bg-slate-300'>
      <LazyLoadImage 
        placeholder={<Placeholder />}
        threshold={80}
        // effect="black-and-white"
        className="w-full object-center"
        srcSet={srcSetString}
        src={srcSet.original}
        alt={alt}
        loading="lazy"
        height="auto"
        width="full"
        sizes="(max-width: 650px) calc((100vw - 45px) / 2), (max-width: 900px) calc((100vw - 45px) / 2), (max-width: 1440px) calc((100vw - 100px) / 3), (max-width: 1600px) calc((100vw - 200px) / 3), calc((1600px - 200px) / 3)"/>
    </article>
  );
};

export default Photo;
