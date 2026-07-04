"use client";
import { motion } from "motion/react";

const wowCircle = (
  text = "Default",
  color = "tcteal",
  reverse = false,
  top = 0,
) => {
  return (
    <div className="size-96 absolute" style={{ top: top }}>
      <motion.div
        data-svg-wrapper
        className="absolute slow-spinner"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        viewport={{ amount: 0.8 }}
      >
        <svg
          width="356"
          height="356"
          viewBox="0 0 356 356"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M305.063 50.5047L298.07 116.495L355.568 149.626L311.122 198.903L338.165 259.502L273.243 273.243L259.502 338.165L198.903 311.122L149.626 355.568L116.495 298.07L50.5047 305.063L57.498 239.073L-1.54797e-05 205.942L44.4459 156.665L17.4027 96.0656L82.3245 82.3245L96.0656 17.4027L156.665 44.446L205.942 -4.32065e-08L239.073 57.498L305.063 50.5047Z"
            className={color === "teal" ? "fill-tcteal" : "fill-tcgreen"}
          />
        </svg>
      </motion.div>
      <motion.div
        className="size-86 absolute left-4 top-0 justify-center items-center text-tcteal-dark text-7xl font-extrabold text-center font-['Montserrat'] leading-12 tracking-tighter flex overflow-hidden"
        initial={{ scale: 0, rotate: reverse ? -30 : 30 }}
        whileInView={{ scale: 1, rotate: reverse ? 30 : -30 }}
        transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
        viewport={{ amount: 0.8 }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default wowCircle;
