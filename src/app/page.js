import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PhotoContainer from "@/components/PhotoContainer";
import ContextProvider from "../context/ContextProvider";
import HomeImage from "@/components/homeImg";

const Page = () => {
  return (
    <>
      <HomeImage />
      <NavBar />
      <Hero />
      <PhotoContainer />
    </>
  );
};

export default Page;
