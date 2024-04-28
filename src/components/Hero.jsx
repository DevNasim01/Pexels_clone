import Input from "./Input";

const Hero = () => {
  return (
    <>
      <section className="absolute top-0 px-[5vw] md:mx-[20vw] tracking-tight items-center flex-col mt-32 md:mt-[12vw]  justify-center opacity-90 ">
        <p className="md:text-[2.6vw]/[3vw] text-[2rem]/[2rem] leading-10 font-medium">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </p>

        <div className="relative text-black w-full my-[1.8vw]">
          <Input />
        </div>

        <p className="tracking-wide text-xs lg:text-[1vw] cursor-pointer"><span className="opacity-85 text-base lg:text-[1.2vw] font-medium cursor-default">Trending: </span> shiv, 8 march, mahadev, shiva parvati, lord shiva...</p>
      </section>
    </>
  );
};

export default Hero;
