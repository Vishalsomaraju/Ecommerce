import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-4 z-20 cursor-pointer"
    >
      <AiOutlineArrowLeft className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300" />
    </div>
  );

  const SampleNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-4 z-20 cursor-pointer"
    >
      <AiOutlineArrowRight className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300" />
    </div>
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-[#0B0C10] overflow-hidden pb-10">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] h-[650px] md:h-[550px] flex items-center justify-center py-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-full px-4">
              {/* Text Section */}
              <div className="text-center md:text-left space-y-3 md:space-y-6 max-w-xl">
                <h3 className="text-[#00FFFF] font-semibold text-sm tracking-wide">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-white text-2xl md:text-4xl font-bold uppercase line-clamp-2">
                  {item.title}
                </h1>
                <p className="text-[#C5C6C7] line-clamp-3">
                  {item.description}
                </p>

                {/* Centered button on small/medium screens */}
                <div className="flex justify-center md:justify-start">
                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md shadow-lg hover:from-cyan-600 hover:scale-105 hover:to-purple-600 transition-all duration-300 px-6 py-3 font-semibold flex items-center gap-2"
                  >
                    Shop Now <MdOutlineShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="transition-transform duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-300 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
