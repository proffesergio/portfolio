"use client";

import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, experienceData } from "@/app/assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const startYear = new Date().getFullYear() - experienceData.length;
  const durationYear = experienceData.duration;

  return (
    <section className="relative py-20">
      <Heading text="Professional Experiences" />

      {/* Decorative Image */}
      <Image
        src="/skills.png"
        width={380}
        height={380}
        alt="Experience"
        className="absolute top-0 left-24 opacity-90 hidden lg:block"
      />

      <div ref={containerRef} className="relative mx-auto max-w-6xl">
        {/* CENTER TIMELINE */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 h-full w-[2px] 
          bg-gray-300 origin-top -translate-x-1/2"
        />

        <div className="flex flex-col gap-24">
          {experienceData.map((data, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="relative grid grid-cols-2 items-center">
                {/* LEFT SIDE */}
                <div className="pr-15">
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
                        <span className="block font-light">Workplace:</span>
                        <span className="block pl-2 font-extralight">
                          {data.workplace}
                        </span>
                      </p>

                      <div className="mt-2">
                        <span className="font-light">Experience:</span>
                        <ul className="pl-4">
                          {data.experience.map((exp, j) => (
                            <li key={j} className="font-extralight">
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Arrow */}
                      <span
                        className="absolute top-1/2 -right-6 
                        -translate-y-1/2  
                        text-red-300 shrink-0 transform-gpu"
                      >
                        {arrowLeftIcon}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* RIGHT SIDE */}
                <div className="pl-15">
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
                        <span className="block font-light">Workplace:</span>
                        <span className="block pl-2 font-extralight">
                          {data.workplace}
                        </span>
                      </p>

                      <div className="mt-2">
                        <span className="font-light">Experience:</span>
                        <ul className="pl-4">
                          {data.experience.map((exp, j) => (
                            <li key={j} className="font-extralight">
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Arrow */}
                      <span
                        className="absolute top-1/2 -left-6 
                        -translate-y-1/2 rotate-180
                        text-red-300 shrink-0 transform-gpu"
                      >
                        {arrowLeftIcon}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* YEAR DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-24 aspect-square rounded-full 
                    border border-gray-300 bg-white 
                    grid place-items-center 
                    text-red-400 font-light text-sm"
                  >
                    {data.duration}
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

export default Experience;
