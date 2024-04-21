import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Hero = () => {
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
      <section className="absolute top-0 px-[1vw] md:mx-[20vw] tracking-tight items-center flex-col mt-32 md:mt-[12vw]  justify-center opacity-90 ">
        <p className="md:text-[2.6vw]/[3vw] text-[2rem]/[2rem] leading-10 font-medium">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </p>

        <div className="relative text-black w-full my-[1.8vw]">
          <form className="flex items-center" role="search" onSubmit={handelSubmit}>
            <input onChange={handelScearch} value={value}
              className="border border-gray-300 rounded-md px-[1.1vw] py-[0.8vw] text-[1.2vw] w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent input-home"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="absolute inset-y-0 bg-neutral-300 text-[1.2vw] text-black right-0 hover:bg-blue-600 font-bold py-[0.8vw] px-[2vw] rounded-r-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent btn-home"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <p className="tracking-wide text-[1vw] cursor-pointer"><span className="opacity-85 text-[1.2vw] font-medium cursor-default">Trending: </span> shiv, 8 march, mahadev, shiva parvati, lord shiva...</p>
      </section>
    </>
  );
};

export default Hero;
