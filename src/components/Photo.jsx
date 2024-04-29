import React from "react";

const Photo = ({ srcSet, alt }) => {

  const srcSetString = Object.entries(srcSet)
  .filter(([key]) => key !== "original")
    .map(([key, value]) => {
      const url = new URL(value);
      const height = url.searchParams.get("h") || "auto"; // Default to "auto" if height is not provided
      const width = url.searchParams.get("w") || "auto"; // Default to "auto" if width is not provided
      return `${value} ${width}w ${height}h`;
    })
    .join(", ");

  return (
    <article className='w-full mb-6'>
      <img
        srcSet={srcSetString}
        src={srcSet.original}
        alt={alt}
        height={300}
        width={500} // Default width for original image
        sizes="(max-width: 650px) calc((100vw - 45px) / 2), (max-width: 900px) calc((100vw - 45px) / 2), (max-width: 1440px) calc((100vw - 100px) / 3), (max-width: 1600px) calc((100vw - 200px) / 3), calc((1600px - 200px) / 3)"
      />
    </article>
  );
};

export default Photo;
