// import { cn } from "@/lib/utils";
// import Marquee from "../marquee";

import cn from "../../../utils/cn";
import Marquee from "./Marquee";

const reviews = [
  {
    name: "Mahmud Hasan Sabbir",
    batchNo: "2018",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i.ibb.co/RHMhk5h/20231219-085228.jpg",
  },
  {
    name: "Md Nahid Shikder",
    batchNo: "2018",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://i.ibb.co/6XWXfms/IMG-20180417-141409.jpg",
  },
  {
    name: "Nymur Rahman Tushar",
    batchNo: "2018",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://i.ibb.co/n7NtyFW/285133397-1638982559792686-8959378980286529429-n.jpg",
  },
  {
    name: "Jane",
    batchNo: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    batchNo: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    batchNo: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

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
        "relative w-80 cursor-pointer divide-y-2 overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="md:flex flex-col items-center gap-2">
        <img
          className="rounded-2xl w-[300px] h-[350px] object-cover"
          alt=""
          src={img}
        />
        <div className="flex items-center flex-col">
          <figcaption className="text-2xl font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xl font-medium dark:text-white/40">
            Batch: {batchNo}
          </p>
        </div>
      </div>

      <blockquote className="mt-4 text-lg">{body}</blockquote>
    </figure>
  );
};

const AlumniMarquee = () => {
  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        <h1 className="text-4xl font-displayTwo font-bold text-center my-10">
          Some Honorable Alumni
        </h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.batchNo} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </>
  );
};

export default AlumniMarquee;
