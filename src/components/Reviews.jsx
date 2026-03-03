"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import {
  reviewsData,
  arrowLeftLightIcon,
  arrowRightLightIcon,
  starEmptyIcon,
  starFullIcon,
  starHalfIcon,
} from "@/app/assets";
import { useState, useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";

const Reviews = () => {
  // state variables
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  const rightClickHandler = () => {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(slides.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
    prevIndex.current = index;
  };

  const leftClickHandler = () => {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
    // { delay: 0.3 });
    // prevIndex.current = index;
  };

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  // console.log("Current Slide:", slides.current[index]);
  return (
    <div className="my=20 px-96">
      <Heading text={"Reviews"} />

      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[280px] h-[500px] lg:h-[450px] md:h-[400px] sm:h-[600px] flex items-center justify-center overflow-hidden"
        >
          {/* Single Review Card */}
          {reviewsData.map((review, index) => (
            <motion.div
              initial={{ x: "100%" }}
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 lg:p-5 rounded-xl"
              ref={(el) => slides.current.push(el)} // reference to each slide
            >
              <Image
                src={review.image}
                alt={""}
                width={130}
                height={130}
                className="w-[130px] aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl md:text-xl text-center tracking-wider text-yellow-600">
                {" "}
                {review.name}{" "}
              </h1>
              <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2">
                {" "}
                {review.review}{" "}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars
                    .reduce((sum, item) => {
                      return (sum += item);
                    }, 0)
                    .toFixed(1)}{" "}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star === 1
                        ? starFullIcon
                        : star === 0.5
                        ? starHalfIcon
                        : starEmptyIcon}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <button
            className={`${
              index === 0
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-transform`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
          >
            {arrowLeftLightIcon}
          </button>
          <button
            className={`${
              index === reviewsData.length - 1
                ? "opacity-30 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            } hover:scale-150 transition-transform`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
          >
            {arrowRightLightIcon}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
