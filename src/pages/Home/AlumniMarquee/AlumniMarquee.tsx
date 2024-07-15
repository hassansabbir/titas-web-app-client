// import { cn } from "@/lib/utils";
// import Marquee from "../marquee";

import { Tooltip } from "antd";
import cn from "../../../utils/cn";
import Marquee from "./Marquee";

const reviews = [
  {
    name: "Mahmud Hasan Sabbir",
    batchNo: "2018",
    body: "Absolutely stunning! The attention to detail is remarkable. I'm thoroughly impressed with the quality and craftsmanship.",
    img: "https://i.ibb.co/RHMhk5h/20231219-085228.jpg",
  },
  {
    name: "Md Nahid Shikder",
    batchNo: "2018",
    body: "Speechless! This exceeded all my expectations. Truly exceptional in every way.",
    img: "https://i.ibb.co/mbVCy5K/242776259-180841560856895-4978111939269678625-n.jpg",
  },
  {
    name: "Nymur Rahman Tushar",
    batchNo: "2018",
    body: "Wow! This is beyond amazing. I can't get enough of it! The design and functionality are outstanding.",
    img: "https://i.ibb.co/n7NtyFW/285133397-1638982559792686-8959378980286529429-n.jpg",
  },
  {
    name: "Jahid Uddin Babu",
    batchNo: "2018",
    body: "Incredible! The craftsmanship is superb. I'm in awe of the attention to detail.",
    img: "https://i.ibb.co/tBRZ7mH/IMG-20240622-224009-926.jpg",
  },
  {
    name: "Sheikh Shariar Saif",
    batchNo: "2018",
    body: "Impressive! This is exactly what I was looking for. Love it for its functionality and sleek design.",
    img: "https://i.ibb.co/HXWTyyW/Screenshot-2023-10-31-095802.png",
  },
  {
    name: "Asif Iqbal Eresh",
    batchNo: "2018",
    body: "Fantastic! The quality is outstanding. Couldn't be happier with the performance and durability.",
    img: "https://i.ibb.co/t4pdz0G/Whats-App-Image-2023-10-25-at-12-54-05-AM.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  batchNo,
  body,
}: {
  img: string;
  name: string;
  batchNo: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-60 cursor-pointer divide-y-2 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Tooltip title={body} placement="bottom">
        <div className="md:flex flex-col items-center gap-2">
          <img
            className="rounded-2xl w-full h-[200px] object-cover"
            alt=""
            src={img}
          />
          <div className="flex items-center flex-col">
            <figcaption className="text-lg font-semibold  text-black">
              {name}
            </figcaption>
            <p className="text-base font-medium">
              Batch: {batchNo}
            </p>
          </div>
        </div>

        <blockquote className="mt-4 text-base text-center line-clamp-4 truncate">
          {body}
        </blockquote>
      </Tooltip>
    </figure>
  );
};

const AlumniMarquee = () => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl" id="alumni">
        <h1 className="text-4xl font-displayTwo font-bold text-center my-10">
          Some Honorable Alumni
        </h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default AlumniMarquee;
