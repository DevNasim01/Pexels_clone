"use client"
import React, { useState } from 'react'


const NavBar = ({ mainpage, onSearchSubmit}) => {
  const [value, setvalue] = useState('');
  
  const additionalStyles = mainpage && {
    borderBottom: '1px solid #DDDDDD'
  };

  const handelScearch = (e) => {
    const inputText = e.target.value;
    setvalue(inputText);
  };

  const handelSubmit = (e) => {
  e.preventDefault();
  if (value.trim() !== '') {
    onSearchSubmit(encodeURI(value));
  }
  }
  return (
    <>
      <nav className="absolute top-0 w-full" style={{ color: mainpage && 'black',...additionalStyles }}>
      <div className='flex w-full px-[5vw] md:px-[4vw] py-[5vw] md:py-[2vw] items-center plus-bolder'>
        <div className='flex items-center'>
          <div className='md:hidden'>
              <a href="/">
              <svg width="40" height="40" className="DisplayNone_mobile-tablet__6iQd1 spacing_noMargin__Q_PsJ spacing_omr50__hkepU spacing_dmr30__cxy_w spacing_mmr15__qhwu1 spacing_tmr15__VKPzp" viewBox="0 0 50 50"><g transform="translate(-3894 2762)"><rect width="50" height="50" rx="8" transform="translate(3894 -2762)" fill="#07a081"></rect><path d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z" transform="translate(3880 -2773)" fill="#fff"></path></g></svg>
              </a>
          </div>
      
          <div className='hidden md:block'>
          <a href="/">
            <svg width="10.5vw" height="5vw" className="DisplayNone_desktop-oversized__OPqkZ spacing_noMargin__Q_PsJ spacing_omr50__hkepU spacing_dmr30__cxy_w spacing_mmr15__qhwu1 spacing_tmr15__VKPzp" viewBox="0 0 130.318 50"><g transform="translate(-3894 2762)"><rect width="50" height="50" rx="8" transform="translate(3894 -2762)" fill="#07a081"></rect><path d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z" transform="translate(3880 -2773)" fill="#fff"></path><path d="M1.694,0h2.6V-6.16H7.656a6.579,6.579,0,0,0,2.915-.616,4.639,4.639,0,0,0,1.969-1.76,5.1,5.1,0,0,0,.7-2.728,5.146,5.146,0,0,0-.7-2.75,4.639,4.639,0,0,0-1.969-1.76,6.579,6.579,0,0,0-2.915-.616H1.694Zm2.6-8.47v-5.61H7.722a3.03,3.03,0,0,1,2.134.748,2.641,2.641,0,0,1,.814,2.046A2.684,2.684,0,0,1,9.856-9.24a2.978,2.978,0,0,1-2.134.77ZM20.372.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5A3.458,3.458,0,0,1,18-2.827a3.433,3.433,0,0,1-1.1-2.409H25.74a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594a6.154,6.154,0,0,0-.671-2.849,5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,15.081-2.8,5.9,5.9,0,0,0,17.226-.561,5.958,5.958,0,0,0,20.372.264Zm-.2-10.34a3,3,0,0,1,2.112.792,2.9,2.9,0,0,1,.924,2.068H16.94a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,20.174-10.076ZM26.422,0h2.926l2.706-3.982L34.738,0h2.926L33.506-5.962l4.18-5.94H34.76L32.054-7.964,29.348-11.9H26.422l4.158,5.94ZM44.088.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5,3.458,3.458,0,0,1-2.4-.891,3.433,3.433,0,0,1-1.1-2.409h8.844a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594A6.154,6.154,0,0,0,48.9-9.251a5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,38.8-2.8,5.9,5.9,0,0,0,40.942-.561,5.958,5.958,0,0,0,44.088.264Zm-.2-10.34A3,3,0,0,1,46-9.284a2.9,2.9,0,0,1,.924,2.068h-6.27a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,43.89-10.076ZM51.546,0h2.486V-16.654H51.546ZM60.9.264a5.6,5.6,0,0,0,2.321-.451,3.635,3.635,0,0,0,1.551-1.254,3.21,3.21,0,0,0,.55-1.859,3.088,3.088,0,0,0-.792-2.123A4.635,4.635,0,0,0,62.26-6.732L60.324-7.3a4.436,4.436,0,0,1-1.034-.484,1.023,1.023,0,0,1-.484-.924,1.212,1.212,0,0,1,.484-1.012,2.068,2.068,0,0,1,1.3-.374,3.005,3.005,0,0,1,1.705.506A2.944,2.944,0,0,1,63.4-8.228l1.914-.9a4.344,4.344,0,0,0-1.8-2.233,5.337,5.337,0,0,0-2.9-.8,5.1,5.1,0,0,0-2.178.451,3.7,3.7,0,0,0-1.518,1.243,3.2,3.2,0,0,0-.55,1.87,3.1,3.1,0,0,0,.759,2.09,4.624,4.624,0,0,0,2.3,1.32l1.87.528a3.923,3.923,0,0,1,1.078.473,1.057,1.057,0,0,1,.506.957,1.259,1.259,0,0,1-.55,1.078,2.391,2.391,0,0,1-1.43.4,3.2,3.2,0,0,1-1.881-.594A4.049,4.049,0,0,1,57.684-3.96l-1.914.9a4.774,4.774,0,0,0,1.925,2.42A5.7,5.7,0,0,0,60.9.264Z" transform="translate(3959 -2728)" fill={ mainpage? 'black' : '#fff'}></path></g></svg>
          </a>
          </div>
        </div>
          
       {mainpage? <div className='w-full px-5 md:px-[2vw] text-base md:text-[1.2vw]'>
          <form className="flex items-center" role="search" onSubmit={handelSubmit}>
              <input onChange={handelScearch} value={value}
                className="border border-gray-300 rounded-md px-4 py-2 md:py-3 w-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent btn-home"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              
            </form>
        </div> : <div className='w-full'></div>} 

        <div className='flex gap-[3vw] justify-end items-center'>
        <div className='hidden md:flex text-[1.2vw] justify-end w-full items-center gap-[4.5vw] text-lg font-medium '>
          <p className='flex items-center gap-[0.2vw]'>Explore <i className="fa-solid fa-chevron-down"></i></p>
          <p>License</p>
          <i className="fa-regular fa-bell text-[1.8vw]"></i>
          <div className='flex items-center gap-[0.5vw]'>
              <div className='w-[2.5vw] h-[2.5vw] rounded-full bg-red-400'></div> 
              <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        {
        mainpage ? <button className='hidden md:block hover:shadow-md transition-all duration-300 px-[1.5vw] text-[1.2vw] py-[0.8vw] border shadow-sm bg-white text-black font-medium rounded-md md:ml-[1.5vw]'>Upload</button> : <button className='md:px-[2.5vw] md:py-[1vw] px-5 py-2 bg-white text-black font-medium text-balance md:text-[1.2vw] rounded-md mr-3 md:ml-5'>Upload</button>
        }
        
        <div className='md:hidden mx-0 my-auto text-2xl'>
            <i className="fa-solid fa-bars "></i>
          </div>
        </div>
      </div>

      
      </nav>
    </>
  )
}

export default NavBar;