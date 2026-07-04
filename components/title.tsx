"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const Title = ({ name = "Default" }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 pt-50 pb-20 text-tcgreen-dark text-9xl font-extrabold -tracking-widest w-3/4">
          <motion.div
            className="bg-tcgreen col-span-2 h-50 rounded-full flex items-center justify-start border-8 long-shadow-green-dark border-tcgreen-dark font-['Montserrat']"
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
            <div className="ps-4">{name}</div>
          </motion.div>
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="object-cover overflow-hidden rounded-full w-full h-50 border-8 bg-tcgreen-dark long-shadow-green-dark border-tcgreen-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="object-cover overflow-hidden rounded-full w-full h-50 border-8 bg-tcgreen-dark long-shadow-green-dark border-tcgreen-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="object-cover overflow-hidden rounded-full w-full h-50 border-8 bg-tcgreen-dark long-shadow-green-dark border-tcgreen-dark"
          />
          <Image
            src="https://picsum.photos/500/300"
            alt={name}
            width={500}
            height={300}
            className="object-cover overflow-hidden rounded-full w-full h-50 border-8 bg-tcgreen-dark long-shadow-green-dark border-tcgreen-dark"
          />
        </div>
      </div>
    </>
  );
};

export default Title;
