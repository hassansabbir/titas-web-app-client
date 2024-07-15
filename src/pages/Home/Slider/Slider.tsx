import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperStyles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import imageOne from "../../../assets/SliderImages/imageOne.jpg";
import imageTwo from "../../../assets/SliderImages/imageTwo.jpg";
import imageThree from "../../../assets/SliderImages/imageThree.jpg";
import imageFour from "../../../assets/SliderImages/imageFour.jpg";
// import Button from "../../../components/ui/Button";
import PageWrapper from "../../../components/ui/PageWrapper";

const Slider = () => {
  return (
    <PageWrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen font-displayThree"
      >
        <SwiperSlide className="relative ">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-5 text-2xl md:text-6xl font-semibold md:space-y-8 space-y-4">
              <h1>
                <span className="md:text-5xl "> Welcome to </span>
                <br /> Titas Gas Adarsha High School!
              </h1>
              <p className="md:text-2xl">Where Excellence Meets Education.</p>
              {/* <Button size="large">Read More</Button> */}
              {/*<Button href="/">Read More</Button>*/}
            </div>
          </div>
          <img src={imageOne} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-5 text-2xl md:text-6xl font-semibold  md:space-y-8 space-y-4">
              <h1>
                <span className="md:text-5xl"> Welcome to </span>
                <br /> Titas Gas Adarsha High School!
              </h1>
              <p className="md:text-2xl">Where Excellence Meets Education.</p>
              {/*<Button href="/">Read More</Button>*/}
            </div>
          </div>
          <img src={imageTwo} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-5 text-2xl md:text-6xl font-semibold  md:space-y-8 space-y-4">
              <h1>
                <span className="md:text-5xl"> Welcome to </span>
                <br /> Titas Gas Adarsha High School!
              </h1>
              <p className="md:text-2xl">Where Excellence Meets Education.</p>
              {/*<Button href="/">Read More</Button>*/}
            </div>
          </div>
          <img src={imageThree} alt="" className="w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="text-center text-white px-5 text-2xl md:text-6xl font-semibold  md:space-y-8 space-y-4">
              <h1>
                <span className="md:text-5xl"> Welcome to </span>
                <br /> Titas Gas Adarsha High School!
              </h1>
              <p className="md:text-2xl">Where Excellence Meets Education.</p>
              {/*<Button href="/">Read More</Button>*/}
            </div>
          </div>
          <img src={imageFour} alt="" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </PageWrapper>
  );
};

export default Slider;
