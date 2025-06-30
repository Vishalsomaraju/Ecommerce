import React, { useRef } from "react";
import Carousel from "../components/Carousel";
import { getData } from "../context/DataContext";
import MidBanner from "../components/MidBanner";
import Features from "../components/Features";

const Home = () => {
  const productRef = useRef(null);

  return (
    <div className="bg-[#101829] text-white  overflow-x-hidden -mb-5">
      <Carousel />
      <MidBanner scrollToRef={productRef} />
      <Features />
    </div>
  );
};

export default Home;
