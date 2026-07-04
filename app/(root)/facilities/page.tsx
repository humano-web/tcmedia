import Title from "@/components/title";
import FCards from "./fcards";

const Facilities = () => {
  return (
    <>
      <Title name="Facilities" place={2} />
      
      <div className="bg-lime-700 self-stretch inline-flex justify-start items-start gap-2.5">
        <div className="self-stretch p-32 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-lime-500 to-teal-500 rounded-2xl shadow-[2px_2px_0px_0px_rgba(254,252,253,1.00)] shadow-[4px_4px_0px_0px_rgba(254,252,253,1.00)] outline outline-4 outline-offset-[-4px] outline-white flex flex-col justify-center items-center gap-2.5">
            <div className="self-stretch justify-start text-gray-900 text-4xl font-medium font-['Montserrat'] leading-9">
              Take a look at our state-of-the-art facilities, designed to meet
              all your creative and production needs. Whether you&apos;re
              looking for a professional studio space, a fully equipped podcast
              suite, or a versatile green screen setup, we have everything you
              need to bring your vision to life.
              <br />
              <br />
              Explore our spaces and see how we can support your next project.
            </div>
          </div>
          <FCards />
        </div>
      </div>
    </>
  );
};

export default Facilities;
