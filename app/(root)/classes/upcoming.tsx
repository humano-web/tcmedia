"use client";
import { motion } from "motion/react"

const Upcoming = () => {
  return (
    <motion.div   animate={{
    scale: 2,
    transition: { duration: 2 }
  }}
className="flex-1 p-4 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
      <div className="size- px-4 py-8 flex flex-col justify-center items-center gap-2.5">
        <div className="w-96 justify-center text-lime-950 text-6xl font-extrabold font-['Montserrat'] leading-[49px] [text-shadow:_4px_4px_0px_rgb(254_252_253_/_1.00)]">
          Upcoming Classes
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                2
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              12:00 PM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  2D Animation Class
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Please add your content here. Keep it short and simple. And
                smile :){" "}
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $25
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  4
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Beginer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                5
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              3:00 PM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  3D Modeling Workshop
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Explore the basics of 3D modeling. Have fun creating!
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $30
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  6
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Beginner
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                8
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              10:00 AM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  Character Design
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Design unique characters with easy steps.
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $40
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  5
                </div>
              </div>
              <div
                data-property-1="Text"
                className="w-24 inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                12
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              1:00 PM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  Storyboarding Basics
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Learn to plan your story visually. Perfect for beginners.
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $20
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  3
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Beginner
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                15
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              4:00 PM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  Advanced Animation Techniques
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Take your skills to the next level with advanced tips.
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $50
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  7
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Advanced
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                18
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              11:00 AM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  Digital Painting
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Create vibrant artwork with digital brushes.
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $35
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  5
                </div>
              </div>
              <div
                data-property-1="Text"
                className="w-28 inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Intermediate
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lime-500 rounded-xl border-4 border-lime-950 shadow-[2px_2px_0px_0px_rgba(30,51,13,1.00),4px_4px_0px_0px_rgba(30,51,13,1.00)] inline-flex justify-start items-center overflow-hidden">
          <div className="w-36 self-stretch px-6 py-4 bg-lime-950 inline-flex flex-col justify-center items-center gap-4 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-center">
              <div className="text-center justify-center text-lime-500 text-4xl font-bold font-['Montserrat']">
                May
              </div>
              <div className="self-stretch text-center justify-center text-lime-500 text-6xl font-black font-['Montserrat']">
                22
              </div>
            </div>
            <div className="self-stretch text-center justify-center text-lime-500 text-base font-semibold font-['Montserrat']">
              2:00 PM
            </div>
          </div>
          <div className="flex-1 px-8 py-4 inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
              <div
                data-type="Heading 4"
                className="self-stretch flex flex-col justify-start items-start"
              >
                <div className="self-stretch justify-start text-lime-950 text-3xl font-bold font-['Montserrat'] leading-7">
                  Visual Effects Basics
                </div>
              </div>
              <div className="self-stretch justify-center text-lime-950 text-sm font-normal font-['Geist']">
                Add magic to your projects with cool effects.
              </div>
            </div>
            <div className="size- inline-flex justify-start items-start gap-8">
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Price
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  $28
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Sessions
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  4
                </div>
              </div>
              <div
                data-property-1="Text"
                className="size- inline-flex flex-col justify-center items-center gap-0.5"
              >
                <div className="text-center justify-center text-lime-950 text-sm font-medium font-['Montserrat']">
                  Level
                </div>
                <div className="text-center justify-center text-lime-950 text-xl font-bold font-['Montserrat']">
                  Beginner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Upcoming;
