import React from "react"
const Photo = ({src, alt}) => {
  return (
    <>
    <section className='w-full mb-3'>
        <div>
            <img src={src} alt={alt} />
        </div>
    </section>
    </>
  )
}

export default Photo