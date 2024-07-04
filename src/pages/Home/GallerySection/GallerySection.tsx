import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";
import imageOne from "../../../assets/GalleryImages/imageOne.jpg";
import imageTwo from "../../../assets/GalleryImages/imageTwo.jpg";
import imageThree from "../../../assets/GalleryImages/imageThree.jpg";
import imageFour from "../../../assets/GalleryImages/imageFour.jpg";
import imageFive from "../../../assets/GalleryImages/imageFive.jpg";
import imageSix from "../../../assets/GalleryImages/imageSix.jpg";

type Item = {
  id: string;
  imgSrc: string;
};

const items: Item[] = [
  { id: "1", imgSrc: imageOne },
  { id: "2", imgSrc: imageTwo },
  { id: "3", imgSrc: imageThree },
  { id: "4", imgSrc: imageFour },
  { id: "5", imgSrc: imageFive },
  { id: "6", imgSrc: imageSix },
];

const GallerySection: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null) //~ (null) here is the initial state;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="font-displayThree text-center">
        <div className="m-20">
          <Slide className="text-2xl bold">Gallery</Slide>
          <Fade className="font-displayTwo text-sm font-semibold">
            Some of the best pictures of our students and moments.
          </Fade>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-1/2 flex-wrap">
            {items.slice(0, 3).map((item, i) => (
              <motion.div
                onClick={() => {
                  setOpen(true);
                  setIndex(i);
                }}
                key={item.id}
                layoutId={item.id}
                className={`overflow-hidden ${i === 2 ? "lg:w-full" : "lg:w-1/2"}`}
              >
                <img
                  alt="gallery picture"
                  className="block object-cover h-full w-full object-center cursor-zoom-in"
                  src={item.imgSrc}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex w-1/2 flex-wrap">
            {items.slice(3, 6).map((item, i) => (
              <motion.div
                onClick={() => {
                  setOpen(true);
                  setIndex(i + 3);
                }}
                key={item.id}
                layoutId={item.id}
                className={`overflow-hidden ${i === 0 ? "lg:w-full" : "lg:w-1/2"}`}
              >
                <img
                  alt="gallery picture"
                  className="block object-cover h-full w-full object-center cursor-zoom-in"
                  src={item.imgSrc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 top-0 left-0 right-0 bottom-0 flex flex-col items-center w-full h-screen justify-center dark:bg-black/90 bg-white/90 backdrop-blur-sm cursor-zoom-out"
            onClick={() => {
              setOpen(false);
              setIndex(null);
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              layoutId={items[index].id}
              className="w-fit h-[80%] mx-auto cursor-default"
            >
              <img
                src={items[index].imgSrc}
                width={800}
                height={800}
                alt="single-image"
                className="rounded-md w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
