"use client";
import wowCircle from "@/components/wowCircle";
import Testimonial from "@/components/testimonial";
import { motion } from "motion/react";
import { useSyncExternalStore } from "react";
import Footer from "@/components/footer";

export default function Home() {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!isMounted) {
    return (
      <main
        className="w-full h-screen overflow-y-scroll overflow-x-hidden relative inline-flex flex-col justify-start items-start snap-mandatory snap-y"
        aria-busy="true"
      />
    );
  }

  const introText =
    "A Creative Media Production Studio In the South Sound".split("");

  return (
    <main className="w-full h-screen overflow-y-scroll overflow-x-hidden relative inline-flex flex-col justify-start items-start snap-mandatory snap-y">
      {/* Donation hero section */}
      <div className="w-full min-h-screen px-7 pt-52 pb-12 inline-flex justify-start items-center gap-0 relative bg-[url('/6e18cc_a7b880eb0aab4ad0aee6bedf22d734de~mv2.avif')] bg-cover snap-start snap-always">
        <div className="bg-tcgreen-dark/60 p-8 absolute left-0 top-0 h-full flex justify-center items-center">
          <motion.div
            className="w-1/4 h-full flex flex-col justify-center items-center gap-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="self-stretch justify-start text-white text-4xl font-medium font-['Montserrat'] leading-8">
              <span>Help TCMedia with your donation</span>
            </motion.div>
            <div className="self-stretch p-8 bg-tcteal-light rounded-2xl flex flex-col justify-start items-start gap-6">
              <div className="self-stretch h-7 inline-flex justify-start items-center gap-2">
                <div className="size-6 px-1 bg-tcgreen rounded-full flex justify-center items-center">
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
                <div className="h-7 flex justify-start items-start">
                  <div className="justify-start text-tcgreen-dark text-xl font-semibold font-['Montserrat'] leading-7">
                    Choose amount
                  </div>
                </div>
              </div>
              <div className="self-stretch h-9 pr-0 inline-flex justify-start items-start gap-2">
                <div className="flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-sm font-medium font-['Montserrat'] leading-5">
                    One-time
                  </div>
                </div>
                <div className="flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-sm font-medium font-['Montserrat'] leading-5">
                    Monthly
                  </div>
                </div>
                <div className="flex-1 h-9 px-4 py-2 bg-tcgreen-light rounded-lg border-2 border-tcgreen-dark flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-sm font-medium font-['Montserrat'] leading-5">
                    Yearly
                  </div>
                </div>
              </div>
              <div className="self-stretch h-32 relative grid grid-cols-2 gap-4">
                <div className="w-auto h-14 px-4 py-2 left-0 top-0  bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg inline-flex justify-center items-center content-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-lg font-semibold font-['Montserrat'] leading-7">
                    $1000
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2  top-0  bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-lg font-semibold font-['Montserrat'] leading-7">
                    $500
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2 left-0   bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-lg font-semibold font-['Montserrat'] leading-7">
                    $250
                  </div>
                </div>
                <div className="w-auto h-14 px-4 py-2   bg-tcgreen-light border-2 border-tcgreen-dark rounded-lg inline-flex justify-center items-center gap-2">
                  <div className="text-center justify-start text-tcgreen-dark text-lg font-semibold font-['Montserrat'] leading-7">
                    $100
                  </div>
                </div>
              </div>
              <div className="self-stretch h-12 px-4 bg-tcgreen-light border-2 border-tcgreen-dark rounded-[10px] inline-flex justify-start items-center gap-2">
                <div className="w-2 h-6 relative">
                  <div className=" absolute justify-start text-tcgreen-dark text-base font-normal font-['Montserrat'] leading-6">
                    $
                  </div>
                </div>
                <div className="flex-1 h-6 flex justify-start items-center overflow-hidden">
                  <input
                    type="number"
                    placeholder="Other"
                    className="justify-center text-black/50 text-base font-normal font-['Montserrat']"
                  />
                </div>
                <div className="w-8 h-6 relative">
                  <div className="left-0  absolute justify-start text-gray-500 text-base font-normal font-['Montserrat'] leading-6">
                    USD
                  </div>
                </div>
              </div>
              <div className="self-stretch h-12 flex flex-col justify-start items-start gap-3">
                <div className="self-stretch h-5 inline-flex justify-start items-center gap-3">
                  <div className="h-5 flex justify-start items-start gap-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="justify-start text-tcgreen-dark text-sm font-medium font-['Montserrat'] leading-5">
                      Add note/comment
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-5 inline-flex justify-start items-center gap-3">
                  <div className="h-5 flex justify-start items-start gap-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className="justify-start text-tcgreen-dark text-sm font-medium font-['Montserrat'] leading-5">
                      Give in honor/memory
                    </div>
                  </div>
                </div>
              </div>
              <button className="self-stretch h-12 relative bg-tcteal-dark rounded-lg">
                <div className="text-center justify-start text-tcteal-light text-xl font-semibold font-['Montserrat'] leading-5">
                  Continue
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 w-3/4 h-full inline-flex flex-col justify-center items-end gap-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-3/4 flex flex-col justify-center items-end gap-2.5">
              <div className="text-right justify-center items-center text-lime-500 text-8xl font-black font-['Montserrat_Alternates'] leading-16 tracking-tighter">
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
            <div className="w-1/2 flex justify-center items-center gap-2.5">
              <div className="flex-1 text-right justify-start text-white text-2xl font-semibold font-['Montserrat'] leading-7">
                Professional studios, equipment, and media education — open to
                everyone in our community.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Practical media learning section */}
      <div className="w-full min-h-screen px-32 relative flex flex-rows justify-start items-start gap-20 bg-[url('/classes.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcteal-dark/75 absolute px-20 py-36  inset-0 flex flex-col">
          <motion.div
            className="w-1/2 justify-center text-tcteal text-9xl font-black font-['Montserrat_Alternates'] leading-20 pt-10 tracking-tighter"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Practical Media Learning
          </motion.div>
          <div className="flex-1 inline-flex flex-col justify-end items-end gap-2.5">
            <motion.div
              className="w-1/2 justify-center text-tcteal text-3xl font-medium font-['Montserrat'] leading-9"
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
          <div className="w-fit h-screen right-1/4 top-40 absolute">
            {wowCircle("Learn Today!", "teal", true)}

            {/* <div className="size-96 top-40 absolute">
              <div data-svg-wrapper className="absolute slow-spinner">
                <svg
                  width="356"
                  height="356"
                  viewBox="0 0 356 356"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M305.063 50.5047L298.07 116.495L355.568 149.626L311.122 198.903L338.165 259.502L273.243 273.243L259.502 338.165L198.903 311.122L149.626 355.568L116.495 298.07L50.5047 305.063L57.498 239.073L-1.54797e-05 205.942L44.4459 156.665L17.4027 96.0656L82.3245 82.3245L96.0656 17.4027L156.665 44.446L205.942 -4.32065e-08L239.073 57.498L305.063 50.5047Z"
                    fill="#1EBDBD"
                  />
                </svg>
              </div>
              <div className="size-86 absolute left-4 top-0 rotate-30 justify-center items-center text-tcteal-dark text-7xl font-extrabold font-['Montserrat'] leading-12 tracking-tighter flex overflow-hidden">
                Learn
                <br />
                Today!
              </div>
            </div> */}
          </div>
          <motion.div
            className="bg-[url('/classes.png')] h-screen bg-cover bg-center absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            viewport={{ amount: 0.8 }}
          ></motion.div>
        </div>
      </div>

      {/* Bring your ideas section */}
      <div className="w-full min-h-screen px-32 relative flex flex-col justify-start items-start gap-20 bg-[url('/11062b_1c981f2b105f45f0b1af4c785a8fa074~mv2(1).jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcgreen-dark/75 absolute px-20 py-36  inset-0 flex flex-rows">
          <motion.div
            className="w-1/2 flex flex-col gap-4 justify-center text-tcgreen text-8xl font-black font-['Montserrat_Alternates'] capitalize leading-18 tracking-tighter"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Bring your ideas to life with TCMedia!
            <div className="justify-start text-tcgreen text-3xl font-medium font-['Montserrat'] leading-8 tracking-normal">
              Whether you need studio space rental, video training, or
              professional editing, our team is here to help. Wemake the process
              easy, friendly, and budget-friendly so you can focus on creating.
              Fill out the form below to get started today!
            </div>
          </motion.div>
          <div className="w-1/2 overflow-hidden flex justify-center items-center relative z-10">
            {wowCircle("Inquire Now!", "green", false, 100)}
          </div>
          <motion.div
            className="bg-[url('/11062b_1c981f2b105f45f0b1af4c785a8fa074~mv2(1).png')] h-screen bg-cover bg-center absolute inset-0"
            initial={{ filter: "blur(20px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          >
            {" "}
          </motion.div>
        </div>
      </div>

      {/* Volunteer callout section */}
      <div className="w-full min-h-screen p-32 relative flex flex-col justify-start items-start gap-20 bg-[url('/Volunteer.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcteal/75 absolute px-20 py-36  inset-0 flex flex-col">
          <div className="w-full inline-flex justify-end items-start gap-2.5 py-8">
            <div className="w-1/2 text-right justify-center text-tcteal-dark text-2xl items-center font-medium font-['Montserrat'] leading-6">
              Whether you need studio space rental, video training, or
              professional editing, our team is here to help. We make the
              process easy, friendly, and budget-friendly so you can focus on
              creating. Fill out the form below to get started today!
            </div>
          </div>
          <div className="z-20 left-5/8 absolute">
            {wowCircle("Be a Volunteer!", "teal", true, 150)}
          </div>
          <motion.div
            className="bg-[url('/Volunteer.png')] h-screen bg-cover bg-center absolute inset-0"
            initial={{ filter: "opacity(0)" }}
            whileInView={{ filter: "opacity(1)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          >
            {" "}
          </motion.div>
          <motion.div
            className="w-1/2 flex flex-col gap-4 justify-center text-tcteal-light font-black font-['Montserrat_Alternates'] text-9xl capitalize leading-none tracking-tighter absolute left-10 top-1/2 transform -translate-y-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.8 }}
          >
            Be a Volunteer!
          </motion.div>
        </div>
      </div>
      <Testimonial
        text="I can't wait to learn more and dedicate myself to the art of voiceover and performance with you all as a guide! You know what you're talking about and the TCMedia team sincerely wants to help me — that's like, the best combination ever!"
        author="Nicole Sharkody"
        color="teal"
      />

      {/* Facilities highlight section */}
      <div className="w-full min-h-screen h-96 px-44 py-36 relative flex flex-col justify-start items-start gap-6 bg-[url('/Controlroom.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcgreen-dark/80 w-full inset-0 flex flex-col h-full justify-start items-start gap-6 absolute z-10">
          <motion.div className="text-tcgreen text-5xl font-medium font-['Montserrat'] leading-10 ps-140 pe-96 pt-64 tracking-normal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ amount: 0.8 }}
          >
            Our largest studio, perfect for video production, photography, and
            live broadcasts.
          </motion.div>
        </div>
        <div className="w-full h-full relative items-end justify-end flex flex-col gap-2 z-20">
          <motion.div className="w-3/4 justify-end text-tcgreen text-[175px] font-black font-['Montserrat']  leading-28 tracking-tighter"
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
        <div className="z-20 top-0 right-100 absolute">
          {wowCircle("Visit!", "green", true, 150)}
        </div>
        <motion.div
          className="bg-[url('/Controlroom.png')] h-screen bg-cover bg-center absolute inset-0 z-30"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ amount: 0.8 }}
        />
      </div>
      {/* Membership promotion section */}
      <div className="w-full min-h-screen p-32 relative flex flex-row justify-start items-start gap-20 bg-[url('/Membership.jpg')] bg-cover bg-center snap-start snap-always">
        <div className="bg-tcteal-dark/75 absolute px-20 py-36 w-full inset-0 flex flex-row">
          <div className="w-full justify-start items-start gap-2.5 py-8">
            <div className="w-3/4 text-left justify-start text-tcteal text-3xl items-center font-medium font-['Montserrat'] leading-7">
              Gain exclusive access to our state-of-the-art production
              facilities, professional equipment,
              and hands-on training to bring your projects to life. Whether
              you&apos;re a seasoned creator or just starting out,
              TCMedia is here to support your media journey.
            </div>

            <div className="flex flex-row w-full">
              <div className="w-full relative">
                {wowCircle("Join!", "teal", true, 75)}
              </div>
              <motion.div
                className="text-tcteal font-black font-['Montserrat_Alternates'] text-9xl capitalize leading-none tracking-tighter transform flex justify-center items-center absolute left-1/2 top-5/8 -translate-x-1/2 -translate-y-1/2 z-50"
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
            className="bg-[url('/Membership.png')] h-screen bg-cover bg-center absolute inset-0"
            initial={{ filter: "opacity(0)" }}
            whileInView={{ filter: "opacity(1)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ amount: 0.8 }}
          />
        </div>
      </div>

      {/* Testimonial section */}
      <Testimonial
        text="I can't wait to learn more and dedicate myself to the art of voiceover and performance with you all as a guide! You know what you're talking about and the TCMedia team sincerely wants to help me — that's like, the best combination ever!"
        author="Nicole Sharkody"
        color="green"
      />
      <Footer />
    </main>
  );
}
