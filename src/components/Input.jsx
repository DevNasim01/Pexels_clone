"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Input = () => {
    const router = useRouter();
  const [value, setvalue] = useState('');

  const handelScearch = (e) => {
      const inputText = e.target.value;
      setvalue(inputText);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      router.push(`/search/${encodeURIComponent(value)}`);
    }
  }
  return (
    <>
    <form className="flex items-center" role="search" onSubmit={handelSubmit}>
            <input onChange={handelScearch} value={value}
              className="border border-gray-300 rounded-md px-4 lg:px-[1.1vw] py-1.5 lg:py-[0.8vw] lg:text-[1.2vw] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent input-home"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="absolute inset-y-0 bg-neutral-300 lg:text-[1.2vw] text-base text-black right-0 hover:bg-blue-600 font-bold px-4 lg:px-[1.1vw] py-1.5 lg:py-[0.8vw] rounded-r-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent btn-home"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
    </>
  )
}

export default Input