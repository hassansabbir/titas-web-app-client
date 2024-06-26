import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperStyles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import imageOne from "../../../assets/SliderImages/imageOne.jpg";
import imageTwo from "../../../assets/SliderImages/imageTwo.jpg";
import imageThree from "../../../assets/SliderImages/imageThree.jpg";
import imageFour from "../../../assets/SliderImages/imageFour.jpg";

import { Button } from "antd";

const introAnimation = {
  initial: { y: 0, rotate: -40, scale: 10 },
  animate: {
    y: 20,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            variants={introAnimation}
            initial="initial"
            animate="animate"
            className="text-center text-white px-5 text-2xl md:text-6xl font-bold md:space-y-8 space-y-4"
          >
            <h1>
              <span className="md:text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="md:text-2xl">Where Excellence Meets Education.</p>
            <Button size="large">Read More</Button>
          </motion.div>
        </div>
        <img src={imageOne} alt="" className="w-full h-[700px]" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            variants={introAnimation}
            initial="initial"
            animate="animate"
            className="text-center text-white px-5 text-2xl md:text-6xl font-bold  md:space-y-8 space-y-4"
          >
            <h1>
              <span className="md:text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="md:text-2xl">Where Excellence Meets Education.</p>
            <Button size="large">Read More</Button>
          </motion.div>
        </div>
        <img src={imageTwo} alt="" className="w-full  h-[700px]" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            variants={introAnimation}
            initial="initial"
            animate="animate"
            className="text-center text-white px-5 text-2xl md:text-6xl font-bold  md:space-y-8 space-y-4"
          >
            <h1>
              <span className="md:text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="md:text-2xl">Where Excellence Meets Education.</p>
            <Button size="large">Read More</Button>
          </motion.div>
        </div>
        <img src={imageThree} alt="" className="w-full  h-[700px]" />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div
            variants={introAnimation}
            initial="initial"
            animate="animate"
            className="text-center text-white px-5 text-2xl md:text-6xl font-bold  md:space-y-8 space-y-4"
          >
            <h1>
              <span className="md:text-5xl"> Welcome to </span>
              <br /> Titas Gas Adarsha High School!
            </h1>
            <p className="md:text-2xl">Where Excellence Meets Education.</p>
            <Button size="large">Read More</Button>
          </motion.div>
        </div>
        <img src={imageFour} alt="" className="w-full  h-[700px]" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
