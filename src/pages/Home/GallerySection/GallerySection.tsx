import { Fade, Slide } from "react-awesome-reveal";
import imageOne from "../../../assets/GalleryImages/imageOne.jpg";
import imageTwo from "../../../assets/GalleryImages/imageTwo.jpg";
import imageThree from "../../../assets/GalleryImages/imageThree.jpg";
import imageFour from "../../../assets/GalleryImages/imageFour.jpg";
import imageFive from "../../../assets/GalleryImages/imageFive.jpg";
import imageSix from "../../../assets/GalleryImages/imageSix.jpg";

const GallerySection = () => {
  return (
    <div className="font-displayThree text-center ">
      <div className="m-20">
        <Slide className="text-2xl bold">Gallery</Slide>
        <Fade className="font-displayTwo text-sm font-semibold">
          Some of the best pictures of our students and moments.
        </Fade>
      </div>
      <div>
        <div className=" flex flex-wrap ">
          <div className="flex w-1/2 flex-wrap">
            <div className="lg:w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full object-cover object-center"
                src={imageOne}
              />
            </div>
            <div className="lg:w-1/2 ">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src={imageTwo}
              />
            </div>
            <div className="lg:w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src={imageThree}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="lg:w-full">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src={imageFour}
              />
            </div>
            <div className="lg:w-1/2">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src={imageFive}
              />
            </div>
            <div className="lg:w-1/2">
              <img
                alt="gallery picture"
                className="block h-full w-full  object-cover object-center"
                src={imageSix}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
