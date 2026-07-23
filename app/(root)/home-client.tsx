"use client";
import wowCircle from "@/components/wowCircle";
import Testimonial from "@/components/testimonial";
import { motion } from "motion/react";
import HomeSection from "@/components/homeSection";

export default function Home() {
  const introText =
    "A Creative Media Production Studio In the South Sound".split("");

  return (
    <>
      {/* Donation hero section */}
      <div className="w-full min-h-screen px-7 2xl:pt-52 pb-12 flex flex-col 2xl:inline-flex justify-start items-center gap-0 relative bg-center bg-[url('/6e18cc_a7b880eb0aab4ad0aee6bedf22d734de~mv2.avif')] bg-cover snap-start snap-always">
        <div className="2xl:bg-tcgreen-dark/60 bg-tcgreen-dark/80 p-8 absolute left-0 top-0 h-full flex flex-col-reverse 2xl:flex-row justify-center items-center">
          <motion.div
            className="hidden 2xl:w-1/4 h-full 2xl:flex 2xl:flex-col justify-center items-center gap-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="self-stretch justify-start text-white 2xl:text-4xl font-medium font-['Montserrat'] leading-8">
              <span>Help TCMedia with your donation</span>
            </motion.div>
            <div className="self-stretch p-8 bg-tcteal-light rounded-2xl 2xl:flex 2xl:flex-col justify-start items-start gap-6">
              <div className="self-stretch h-7 2xl:inline-flex justify-start items-center gap-2">
                <div className="size-6 px-1 bg-tcgreen rounded-full 2xl:flex justify-center items-center">
                  <div data-svg-wrapper className="relative">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 4L6 11.3333L2.66666 8"
                        stroke="#FEFCFD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h-7 2xl:flex justify-start items-start">
                  <div className="justify-start text-tcgreen-dark 2xl:text-xl font-semibold font-['Montserrat'] leading-7">
                    Choose amount
                  </div>
                </div>
              </div>
              <div className="self-stretch h-9 pr-0 2xl:inline-flex justify-start items-start gap-2">
                <div className="2xl:flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark 2xl:flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-sm font-medium font-['Montserrat'] leading-5">
                    One-time
                  </div>
                </div>
                <div className="2xl:flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark 2xl:flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-sm font-medium font-['Montserrat'] leading-5">
                    Monthly
                  </div>
                </div>
                <div className="2xl:flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark 2xl:flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-sm font-medium font-['Montserrat'] leading-5">
                    Yearly
                  </div>
                </div>
              </div>
              <div className="self-stretch h-32 relative 2xl:grid 2xl:grid-cols-2 gap-4">
                <div className="w-auto h-14 px-4 py-2 left-0 top-0 bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg 2xl:inline-flex justify-center items-center content-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-lg font-semibold font-['Montserrat'] leading-7">
                    $1000
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2 top-0 bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg 2xl:inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-lg font-semibold font-['Montserrat'] leading-7">
                    $500
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2 left-0 bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg 2xl:inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-lg font-semibold font-['Montserrat'] leading-7">
                    $250
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2 bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg 2xl:inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark 2xl:text-lg font-semibold font-['Montserrat'] leading-7">
                    $100
                  </div>
                </div>
              </div>
              <div className="self-stretch h-12 px-4 bg-tcgreen-light border-2 border-tcgreen-dark rounded-[10px] 2xl:inline-flex justify-start items-center gap-2">
                <div className="w-2 h-6 relative">
                  <div className="absolute justify-start text-tcgreen-dark 2xl:text-base font-normal font-['Montserrat'] leading-6">
                    $
                  </div>
                </div>
                <div className="2xl:flex-1 h-6 2xl:flex justify-start items-center overflow-hidden">
                  <input
                    type="number"
                    placeholder="Other"
                    className="justify-center text-black/50 2xl:text-base font-normal font-['Montserrat']"
                  />
                </div>
                <div className="w-8 h-6 relative">
                  <div className="left-0 absolute justify-start text-gray-500 2xl:text-base font-normal font-['Montserrat'] leading-6">
                    USD
                  </div>
                </div>
              </div>
              <div className="self-stretch h-12 2xl:flex 2xl:flex-col justify-start items-start gap-3">
                <div className="self-stretch h-5 2xl:inline-flex justify-start items-center gap-3">
                  <div className="h-5 2xl:flex justify-start items-start gap-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="justify-start text-tcgreen-dark 2xl:text-sm font-medium font-['Montserrat'] leading-5">
                      Add note/comment
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-5 2xl:inline-flex justify-start items-center gap-3">
                  <div className="h-5 2xl:flex justify-start items-start gap-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="justify-start text-tcgreen-dark 2xl:text-sm font-medium font-['Montserrat'] leading-5">
                      Give in honor/memory
                    </div>
                  </div>
                </div>
              </div>
              <button className="self-stretch h-12 relative bg-tcteal-dark rounded-lg">
                <div className="text-center justify-start text-tcteal-light 2xl:text-xl font-semibold font-['Montserrat'] leading-5">
                  Continue
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="2xl:flex-1 2xl:w-3/4 2xl:h-full 2xl:inline-flex 2xl:flex-col 2xl:justify-center 2xl:items-end gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="2xl:w-3/4 flex flex-row 2xl:flex-col 2xl:justify-center 2xl:items-end gap-2 pb-6 2xl:pb-0">
              <div className="text-right 2xl:justify-center 2xl:items-center text-lime-500 2xl:text-8xl text-6xl font-black font-['Montserrat_Alternates'] 2xl:leading-16 leading-10 tracking-tighter">
                {introText.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.05 }}
                  >
                    {word}
                    {""}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="2xl:w-1/2 2xl:flex justify-center items-center gap-2">
              <div className="2xl:flex-1 text-right justify-start text-white 2xl:text-2xl font-semibold font-['Montserrat'] 2xl:leading-7 leading-4">
                Professional studios, equipment, and media education — open to
                everyone in our community.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Practical media learning section */}

      <HomeSection style="row" title="Practical Media Learning" desc="Media training benefits youth in Olympia in several important ways: Practicing Effective Communication, Confidence Building, Preparation and Practice for Real World Scenarios, Relationship Strengthening, Experience Handling Unexpected Situations" color="teal" main="classes.jpg" tplace="left" lposy="top" rposy="bottom" ltext={false} rtext={false} wowpos="bottomleft" lani="left" rani="right" wowText="Learn Today!" />

      {/* <div className="w-full min-h-screen 2xl:px-32 relative 2xl:flex 2xl:flex-rows justify-start items-start gap-20 2xl:bg-[url('/classes.jpg')] bg-cover bg-top-left 2xl:bg-center snap-start snap-always">
        <div className="bg-tcteal-dark/75 absolute px-10 2xl:px-20 py-36 inset-0 2xl:flex 2xl:flex-col h-full justify-center items-center place-content-center gap-6">
          <motion.div
            className="2xl:w-1/2 justify-center text-tcteal text-7xl 2xl:text-9xl font-black font-['Montserrat_Alternates'] 2xl:leading-20 leading-12 2xl:pt-10 tracking-tighter pb-6 2xl:pb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Practical Media Learning
          </motion.div>
          <div className="2xl:flex-1 2xl:inline-flex 2xl:flex-col justify-end items-end gap-2.5">
            <motion.div
              className="2xl:w-1/2 justify-center text-tcteal 2xl:text-3xl font-medium font-['Montserrat'] leading-4.5 2xl:leading-9"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.8 }}
            >
              Media training benefits youth in Olympia in several important
              ways: Practicing Effective Communication, Confidence Building,
              Preparation and Practice for Real World Scenarios, Relationship
              Strengthening, Experience Handling Unexpected Situations
            </motion.div>
          </div>
          <div className="w-fit h-screen right-1/4 2xl:top-40 absolute left-10 top-20">
            {wowCircle("Learn Today!", "teal", true)}
          </div>
          <motion.div
            className="bg-[url('/classes.png')] h-auto 2xl:h-screen 2xl:bg-cover bg-position-[10%_350px] bg-auto bg-no-repeat 2xl:bg-center absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            viewport={{ amount: 0.8 }}
          ></motion.div>
        </div>
      </div> */}

      {/* Bring your ideas section */}

      <HomeSection style="col" title="Bring Your Ideas To Life With TCMedia!" desc="Whether you need studio space rental, video training, or professional editing, our team is here to help. We make the process easy, friendly, and budget-friendly so you can focus on creating. Fill out the form below to get started today!" color="green" main="/11062b_1c981f2b105f45f0b1af4c785a8fa074~mv2.jpg" tplace="left" lposy="top" rposy="bottom" ltext={true} rtext={false} wowpos="topright" lani="top" rani="bottom" wowText="Inquire Now!" />

      {/* <div className="w-full min-h-screen 2xl:px-32 relative 2xl:flex 2xl:flex-col justify-start items-start gap-20 2xl:bg-[url('/11062b_1c981f2b105f45f0b1af4c785a8fa074~mv2(1).jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcgreen-dark/75 absolute px-10 py-20 2xl:px-20 2xl:py-36 inset-0 flex flex-rows">
          <motion.div
            className="2xl:w-1/2 flex flex-col gap-4 justify-center text-tcgreen text-7xl 2xl:text-9xl font-black font-['Montserrat_Alternates'] capitalize leading-14 2xl:leading-18 tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Bring your ideas to life with TCMedia!
            <div className="justify-start text-tcgreen text-lg 2xl:text-3xl font-medium font-['Montserrat'] leading-4 2xl:leading-8 tracking-normal">
              Whether you need studio space rental, video training, or
              professional editing, our team is here to help. Wemake the process
              easy, friendly, and budget-friendly so you can focus on creating.
              Fill out the form below to get started today!
            </div>
          </motion.div>
          <div className="2xl:w-1/2 2xl:overflow-hidden flex justify-center items-center absolute z-10 right-3/4">
            {wowCircle("Inquire Now!", "green", false, 0)}
          </div>
          <motion.div
            className="bg-[url('/11062b_1c981f2b105f45f0b1af4c785a8fa074~mv2(1).png')] bg-no-repeat h-screen 2xl:bg-cover bg-bottom bg-contain 2xl:bg-center absolute inset-0"
            initial={{ filter: "blur(20px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          >
            {" "}
          </motion.div>
        </div>
      </div> */}

      {/* Volunteer callout section */}

      <HomeSection style="row" title="Be a Volunteer!" desc="Whether you need studio space rental, video training, or professional editing, our team is here to help. We make the process easy, friendly, and budget-friendly so you can focus on creating. Fill out the form below to get started today!" color="teal" main="/Volunteer.jpg" fpos="top" tplace="left" lposy="center" rposy="top" lposx="center" rposx="left" ltext={true} rtext={false} wowpos="bottomright" lani="top" rani="bottom" wowText="We want you!" />


      {/* <div className="w-full min-h-screen 2xl:p-32 relative 2xl:flex 2xl:flex-col justify-start items-start gap-20 2xl:bg-[url('/Volunteer.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="2xl:bg-tcteal/75 bg-tcteal-light/50 absolute 2xl:px-20 px-12 2xl:py-36 py-48 inset-0 2xl:flex 2xl:flex-col">
          <div className="w-full 2xl:inline-flex justify-end items-start gap-2.5 py-8">
            <div className="2xl:w-1/2 2xl:text-right justify-center text-tcteal-dark 2xl:text-2xl items-center font-medium font-['Montserrat'] leading-6">
              Whether you need studio space rental, video training, or
              professional editing, our team is here to help. We make the
              process easy, friendly, and budget-friendly so you can focus on
              creating. Fill out the form below to get started today!
            </div>
          </div>
          <div className="z-20 2xl:left-5/8 left-12 top-72 absolute">
            {wowCircle("We want you!", "teal", true, 150)}
          </div>
          <motion.div
            className="bg-[url('/Volunteer.png')] 2xl:h-screen 2xl:bg-cover bg-contain bg-no-repeat bg-bottom 2xl:bg-center absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          >
            {" "}
          </motion.div>
          <motion.div
            className="2xl:w-1/2 2xl:flex 2xl:flex-col gap-4 justify-center text-tcteal-dark 2xl:text-tcteal-light font-black font-['Montserrat_Alternates'] text-7xl 2xl:text-9xl capitalize leading-12 tracking-tighter absolute left-10 top-40 2xl:top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Be a Volunteer!
          </motion.div>
        </div>
      </div>
 */}
      <Testimonial
        text="I can't wait to learn more and dedicate myself to the art of voiceover and performance with you all as a guide! You know what you're talking about and the TCMedia team sincerely wants to help me — that's like, the best combination ever!"
        author="Nicole Sharkody"
        color="teal"
      />

      {/* Facilities highlight section */}

      <HomeSection style="col" title="Our Facilities!" desc="Our largest studio, perfect for video production, photography, and live broadcasts." color="green" main="/Controlroom.jpg"
        fpos="top" tplace="center" lposy="bottom" rposy="top" lposx="left" rposx="right" ltext={true} rtext={false} wowpos="bottomleft" lani="top" rani="bottom" wowText="Visit!" />

      {/* <div className="w-full min-h-screen h-96 2xl:px-44 2xl:py-48 px-8 py-24 relative 2xl:flex 2xl:flex-col justify-center 2xl:justify-start items-start gap-6 2xl:bg-[url('/Controlroom.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcgreen-dark/80 w-full inset-0 flex 2xl:flex-col h-full 2xl:justify-start 2xl:items-start gap-6 absolute z-10">
          <motion.div className="text-tcgreen 2xl:text-5xl font-medium font-['Montserrat'] 2xl:leading-10 leading-7  2xl:px-10 px-8 2xl:ps-140 2xl:pe-96 pt-64 tracking-normal content-center text-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.8 }}
          >
            Our largest studio, perfect for video production, photography, and
            live broadcasts.
          </motion.div>
        </div>
        <div className="w-full h-full relative 2xl:items-end 2xl:justify-end flex 2xl:flex-col gap-2 z-20">
          <motion.div className="2xl:w-3/4 2xl:justify-end text-tcgreen 2xl:text-[175px] text-7xl font-black font-['Montserrat'] 2xl:leading-28 leading-12 tracking-tighter content-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ amount: 0.8 }}
          >
            Our
            <br />
            Facilities!
          </motion.div>
        </div>
        <div className="h-screen left-0 top-0 absolute overflow-hidden">
        </div>
        <div className="z-20 top-28 left-48 absolute">
          {wowCircle("Visit!", "green", true, 150)}
        </div>
        <motion.div
          className="bg-[url('/Controlroom.png')] 2xl:h-screen 2xl:bg-cover bg-bottom 2xl:bg-center bg-contain bg-no-repeat absolute inset-0 z-30"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ amount: 0.8 }}
        />
      </div> */}

      {/* Membership promotion section */}

      <HomeSection style="col" title="Be a Member!" desc="Gain exclusive access to our state-of-the-art production facilities, professional equipment, and hands-on training to bring your projects to life. Whether you're a seasoned creator or just starting out, TCMedia is here to support your media journey." color="teal" main="/Membership.jpg" tplace="left" lposy="center" rposy="top" lposx="left" rposx="left" ltext={true} rtext={false} wowpos="centerright" lani="left" rani="bottom" wowText="Join!" />

      {/* <div className="w-full min-h-screen 2xl:p-32 p-4 relative flex flex-row justify-start items-start gap-20 2xl:bg-[url('/Membership.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcteal-dark/75 absolute 2xl:px-20 2xl:py-36 w-full inset-0 flex 2xl:flex-row flex-row-reverse">
          <div className="w-full justify-start 2xl:items-start content-center gap-2.5 py-8 flex flex-col-reverse">
            <div className="2xl:w-3/4 text-left justify-start text-tcteal 2xl:text-3xl absolute top-96 left-42 items-center font-medium font-['Montserrat'] 2xl:leading-7 leading-5 flex flex-col gap-2 -translate-x-1/2">
              Gain exclusive access to our state-of-the-art production
              facilities, professional equipment,
              and hands-on training to bring your projects to life. Whether
              you&apos;re a seasoned creator or just starting out,
              TCMedia is here to support your media journey.
            </div>

            <div className="flex 2xl:flex-row flex-row-reverse w-full 2xl:h-screen">
              <div className="w-full 2xl:h-full relative">
                {wowCircle("Join!", "teal", true, 75)}
              </div>
              <motion.div
                className="text-tcteal font-black font-['Montserrat_Alternates'] 2xl:text-9xl text-7xl capitalize 2xl:leading-none leading-13 tracking-tighter transform flex justify-center items-center absolute 2xl:left-1/2 left-50 2xl:top-5/8 top-72 -translate-x-1/2 -translate-y-1/2 z-50"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.8 }}
              >
                Be a Member!
              </motion.div>
            </div>
          </div>{" "}
          <motion.div
            className="bg-[url('/Membership.png')] 2xl:h-screen 2xl:bg-cover 2xl:bg-center bg-no-repeat bg-position-[center_400px] absolute inset-0"
            initial={{ filter: "opacity(0)" }}
            whileInView={{ filter: "opacity(1)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          />
        </div>
      </div> */}

      {/* Testimonial section */}
      <Testimonial
        text="I can't wait to learn more and dedicate myself to the art of voiceover and performance with you all as a guide! You know what you're talking about and the TCMedia team sincerely wants to help me — that's like, the best combination ever!"
        author="Nicole Sharkody"
        color="green"
      />
    </>
  );
}
