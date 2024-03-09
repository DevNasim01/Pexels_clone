import React from 'react'
import Photo from './Photo'

const Main = () => {
  return (
    <>
    <section className='text-black w-full flex flex-col items-center text-xs md:text-sm font-medium px-5 md:px-24'>
        <div className='flex'>
            <p className='md:px-7 px-5 cursor-pointer py-3.5 md:py-3.5 rounded-full hover:bg-black hover:text-white'>Videos</p>
            <p className='md:px-7 px-5 cursor-pointer py-3.5 md:py-3.5 rounded-full hover:bg-black hover:text-white'>Home</p>
            <p className='md:px-7 px-5 cursor-pointer py-3.5 md:py-3.5 rounded-full hover:bg-black hover:text-white'>Leaderboard</p>
            <p className='md:px-7 px-5 cursor-pointer py-3.5 md:py-3.5 rounded-full hover:bg-black hover:text-white'>Challenges</p>
        </div>

        <div className='flex justify-between items-center w-full md:mt-5'>
            <div className='py-5 text-xl md:text-2xl font-medium tracking-tight'>Free Stock Photos</div>
            <button className='md:px-7 px-6 h-12 md:py-7 text-xs md:text-base rounded-md font-medium border-2 flex items-center gap-2'>Tranding <i className="fa-solid fa-chevron-down"></i></button>
        </div>


        <main className='w-full bg-black mt-5 md:mt-8'>
            <Photo />
        </main>
    </section>
    </>
  )
}

export default Main