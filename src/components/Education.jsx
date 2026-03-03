"use client";

import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, educationData } from "@/app/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const startYear = new Date().getFullYear() - educationData.length + 1;
  const passingYear = educationData.map((data) => data.passing_year);
  return (
    <section className="relative py-20">
      <Heading text="Educational Background" className="text-center" />

      {/* Decorative Image */}
      <Image
        src="/education.png"
        width={380}
        height={380}
        alt="Education"
        className="absolute top-0 right-24 opacity-90 hidden lg:block"
      />
      <div ref={containerRef} className="relative mx-auto max-w-6xl">
        {/* CENTER TIMELINE */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 h-full w-[2px] 
          bg-gray-300 origin-top -translate-x-1/2"
        />

        <div className="flex flex-col gap-24">
          {educationData.map((data, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative grid grid-cols-2 items-center">
                {/* LEFT SIDE */}
                <div className="pr-12">
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 60,
                        delay: i * 0.15,
                      }}
                      className="relative rounded-md border border-red-300 
                      bg-white p-5 text-sm"
                    >
                      <h3 className="text-lg font-light text-gray-700">
                        {data.title}
                      </h3>

                      <p className="mt-2">
                        <span className="block font-light">Institution:</span>
                        <span className="block pl-2 font-extralight">
                          {data.institution}
                        </span>
                      </p>

                      <p className="mt-2">
                        <span className="block font-light">Result:</span>
                        <span className="block pl-2 font-extralight">
                          {data.result}
                        </span>
                      </p>

                      <div className="mt-2">
                        <span className="font-light">Major: </span>
                        <span className="block pl-2 font-extralight">
                          {data.group}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span
                        className="absolute top-1/2 -right-6 
                        -translate-y-1/2 rotate-180 
                        text-red-300 shrink-0 transform-gpu"
                      >
                        {arrowLeftIcon}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="pl-12">
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 60,
                        delay: i * 0.15,
                      }}
                      className="relative rounded-md border border-red-300 
                      bg-white p-5 text-sm"
                    >
                      <h3 className="text-lg font-light text-gray-700">
                        {data.title}
                      </h3>

                      <p className="mt-2">
                        <span className="block font-light">Institution:</span>
                        <span className="block pl-2 font-extralight">
                          {data.institution}
                        </span>
                      </p>

                      <p className="mt-2">
                        <span className="block font-light">Result:</span>
                        <span className="block pl-2 font-extralight">
                          {data.result}
                        </span>
                      </p>

                      <div className="mt-2">
                        <span className="font-light">Major:</span>
                        <span className="block pl-2 font-extralight">
                          {data.group}
                        </span>
                      </div>

                      {/* Arrow */}
                      <span
                        className="absolute top-1/2 -left-6 
                        -translate-y-1/2 
                        text-red-300 flex-shrink-0 transform-gpu"
                      >
                        {arrowLeftIcon}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* YEAR DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-14 aspect-square rounded-full 
                    border border-gray-300 bg-white 
                    grid place-items-center 
                    text-red-400 font-light"
                  >
                    {passingYear[i]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
