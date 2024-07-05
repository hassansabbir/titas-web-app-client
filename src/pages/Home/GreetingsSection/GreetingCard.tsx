import React, { SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    id: "5",
    url: "https://i.ibb.co/0MdqSRr/titas-School2.jpg",
    title: "Snow-Capped Serenity",
    description:
      "Snow blankets the high mountain peaks, offering a serene and pristine white canvas against the crisp blue sky.",
    tags: ["Snow-Capped", "Serenity", "Pristine", "Blue Sky", "High Peaks"],
  },
  {
    id: "7",
    url: "https://i.ibb.co/C2JhYbt/titas-School3.jpg",
    title: "Verdant Valley Vista",
    description:
      "A lush green valley nestled between mountains, bathed in the warm light of a setting sun, offering a tranquil retreat.",
    tags: ["Verdant", "Valley", "Vista", "Tranquil", "Sunset"],
  },
  {
    id: "8",
    url: "https://i.ibb.co/0MdqSRr/titas-School2.jpg",
    title: "Rocky Ridges",
    description:
      "The rugged ridges of the mountain form a stark contrast against the soft clouds above, embodying the spirit of adventure.",
    tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
  },
  {
    id: "6",
    url: "https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1713223289172-e45b0ed96eae_cdizhk.jpg",
    title: "Floral Highlands",
    description:
      "Amidst the rugged mountainous terrain, bursts of wildflowers add a splash of color, showcasing nature’s resilience.",
    tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
  },
  {
    id: "9",
    url: "https://res.cloudinary.com/dzl9yxixg/image/upload/v1714741157/photo-1714312634720-ae1f906d09d6_hoslf5.jpg",
    title: "Twilight Peaks",
    description:
      "As twilight descends, the peaks of the mountains are silhouetted against a gradient evening sky, creating a peaceful end to the day.",
    tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
  },
];

const articleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

type Item = {
  id: string;
  url: string;
  title: string;
  description: string;
  tags?: string[];
};

interface GalleryProps {
  items: Item[];
  setIndex: React.Dispatch<SetStateAction<number>>;
  index: number;
}

const GreetingCard: React.FC<GalleryProps> = ({ items, setIndex, index }) => {
  return (
    <div className="min-w-max mx-auto gap-1 md:flex pb-20 pt-10">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          className={`rounded-xl relative ${
            index === i
              ? "w-[93vw] md:w-[55vw] h-[500px]"
              : "w-[93vw] md:w-[50px] md:h-[500px] h-[80px]"
          } flex-shrink-0 transition-all ease-in-out duration-500 origin-center`}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIndex(i);
          }}
        >
          <motion.img
            src={item.url}
            alt={item.title}
            className={`w-full h-full object-cover rounded-xl ${
              index === i ? "cursor-default" : "cursor-pointer"
            }`}
          />
          <AnimatePresence initial={false}>
            {index === i && (
              <motion.article
                variants={articleVariants}
                initial="hidden"
                animate="show"
                className="absolute flex w-full rounded-xl flex-col justify-end h-full top-0 p-3 space-y-2 overflow-hidden bg-gradient-to-t from-gray-100/60 to-transparent"
              >
                <motion.h1
                  variants={articleVariants}
                  className="text-2xl font-semibold"
                >
                  {item.title}
                </motion.h1>
                <motion.p variants={articleVariants} className="leading-[120%]">
                  {item.description}
                </motion.p>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const IndexPage: React.FC = () => {
  const [index, setIndex] = useState(2);

  return (
    <div className="relative w-full">
      <GreetingCard items={items} index={index} setIndex={setIndex} />
    </div>
  );
};

export default IndexPage;
