"use client";
import Image from "next/image";
import { heroIcons } from "@/app/assets";
import {
  useMotionValue,
  useTransform,
  motion,
  useSpring,
  scale,
} from "framer-motion";
import { useState } from "react";

const Hero = () => {
  // state variables
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);

  // state variables
  const [buttonHover, setButtonHover] = useState(false);

  // handelMouseEnter
  const handelMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);

    console.log("Inner Width:", window.innerWidth);
    console.log("Inner Height:", window.innerHeight);
  };

  // motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const { innerWidth, innerHeight } = windowOffset;
  const rotateY = useTransform(x, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(y, [0, innerHeight], [10, -50]);

  // handle mouse movement
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    x.set(event.clientX);
    y.set(event.clientY);

    console.log(`Mouse X: ${clientX}, Mouse Y: ${clientY}`);
  };
  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handelMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src="/f.webp"
              alt="Profile Picture"
              width={250}
              height={250}
              priority={true}
              className="rounded-full h-auto w-[250px]"
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white"
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.5 } }}
            >
              Hi There!
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg tracking-wider text-gray-700 text-justify">
            I'm Hossain Md. Billal, a professional web developer specializing in
            creating stunning and effective websites to help grow your business.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
