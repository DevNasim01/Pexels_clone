import React from "react";

const Hero = () => {
  return (
    <>
      <section className="absolute top-0 px-5 md:mx-[26%] tracking-tight items-center flex-col mt-28 md:mt-56  justify-center opacity-90 ">
        <p className="text-[2.15rem] leading-10 font-medium">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </p>

        <div className="relative text-black w-full my-8">
          <form className="flex items-center" role="search">
            <input
              className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="absolute inset-y-0 bg-neutral-300 text-black right-0 hover:bg-blue-600 font-bold py-3 px-6 rounded-r-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <p className="tracking-wide text-sm cursor-pointer"><span className="opacity-85 text-lg font-medium cursor-default">Trending: </span> shiv, 8 march, mahadev, shiva parvati, lord shiva...</p>
      </section>
    </>
  );
};

export default Hero;
