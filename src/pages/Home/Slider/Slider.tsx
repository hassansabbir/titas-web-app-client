import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import imageOne from "../../../assets/SliderImages/imageOne.jpg";
import imageTwo from "../../../assets/SliderImages/imageTwo.jpg";
import imageThree from "../../../assets/SliderImages/imageThree.jpg";
import imageFour from "../../../assets/SliderImages/imageFour.jpg";

import { Navigation } from "swiper/modules";
import { Button } from "antd";
const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-screen w-full"
      >
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex-col text-center flex items-center justify-center  bg-black bg-opacity-40  text-white text-4xl md:text-6xl font-bold space-y-8">
            <h1>
              <span className="text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="text-2xl">Where Excellence Meets Education.</p>
            <Button type="dashed">Read More</Button>
          </div>

          <img src={imageOne} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex-col text-center flex items-center justify-center  bg-black bg-opacity-40  text-white text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="text-2xl lg:mt-8">
              Where Excellence Meets Education.
            </p>
          </div>

          <img src={imageTwo} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex-col text-center flex items-center justify-center  bg-black bg-opacity-40  text-white text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="text-2xl lg:mt-8">
              Where Excellence Meets Education.
            </p>
          </div>

          <img src={imageThree} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex-col text-center flex items-center justify-center  bg-black bg-opacity-40  text-white text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="text-2xl lg:mt-8">
              Where Excellence Meets Education.
            </p>
          </div>

          <img src={imageFour} alt="" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
