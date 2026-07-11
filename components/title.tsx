"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const Title = ({ name = "Default" }) => {
  return (
    <>
      <div className="2xl:flex items-center justify-center">
        <div className="2xl:grid w-full max-w-screen-2xl 2xl:grid-cols-1 gap-4 px-4 pb-12 pt-28 text-tcgreen-dark 2xl:text-4xl 2xl:text-6xl 2xl:text-8xl 2xl:text-9xl font-extrabold -tracking-widest 2xl:grid-cols-2 2xl:grid-cols-3 sm:gap-6 lg:gap-8 sm:pb-16 sm:pt-40 lg:pb-20 lg:pt-50">
          <motion.div
            className="col-span-1 sm:col-span-2 h-28 sm:h-40 lg:h-50 rounded-full border-4 sm:border-6 lg:border-8 border-tcgreen-dark bg-tcgreen 2xl:flex items-center justify-start font-['Montserrat'] long-shadow-green-dark"
            initial={{
              opacity: 0,
              x: 12,
              y: 12,
              boxShadow:
                "0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark), 0px 0px 0px var(--color-tcgreen-dark)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              boxShadow:
                "0px 0px 0px var(--color-tcgreen-dark), 2px 2px 0px var(--color-tcgreen-dark), 4px 4px 0px var(--color-tcgreen-dark), 6px 6px 0px var(--color-tcgreen-dark), 8px 8px 0px var(--color-tcgreen-dark), 10px 10px 0px var(--color-tcgreen-dark), 12px 12px 0px var(--color-tcgreen-dark)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="ps-4 sm:ps-6">{name}</div>
          </motion.div>
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="h-40 sm:h-44 lg:h-50 w-full rounded-full border-4 sm:border-6 lg:border-8 border-tcgreen-dark bg-tcgreen-dark object-cover overflow-hidden long-shadow-green-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="h-40 sm:h-44 lg:h-50 w-full rounded-full border-4 sm:border-6 lg:border-8 border-tcgreen-dark bg-tcgreen-dark object-cover overflow-hidden long-shadow-green-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="h-40 sm:h-44 lg:h-50 w-full rounded-full border-4 sm:border-6 lg:border-8 border-tcgreen-dark bg-tcgreen-dark object-cover overflow-hidden long-shadow-green-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="h-40 sm:h-44 lg:h-50 w-full rounded-full border-4 sm:border-6 lg:border-8 border-tcgreen-dark bg-tcgreen-dark object-cover overflow-hidden long-shadow-green-dark"
          />
        </div>
      </div>
    </>
  );
};

export default Title;
