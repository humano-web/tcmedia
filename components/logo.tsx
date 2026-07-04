import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex justify-center items-center relative h-14">
      <Link href="/" className="w-50 h-auto">
        <Image
          alt=""
          width={168}
          height={64}
          className="w-20 h-12 absolute left-0 z-10 top-0"
          src="/tc_white.png"
        />
        <div
          className="text-right justify-center text-white text-5xl font-medium font-['Montserrat'] leading-7 text-shadow-teal-dark text-shadow-[1px_1px_0px_rgba(00,28,28,1),2px_2px_0px_rgba(00,28,28,1),3px_3px_0px_rgba(00,28,28,1),4px_4px_0px_rgba(00,28,28,1)] absolute right-0 z-10 top-0"
          style={{
            WebkitTextFillColor: "white",
            WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#002828",
          }}
        >
          TC
          <br />
          Media
        </div>
        <div className="text-right justify-center text-white text-5xl font-medium font-['Montserrat'] leading-7 text-shadow-teal-dark text-shadow-[1px_1px_0px_rgba(00,28,28,1),2px_2px_0px_rgba(00,28,28,1),3px_3px_0px_rgba(00,28,28,1),4px_4px_0px_rgba(00,28,28,1)] absolute right-0 z-10 top-0">
          TC
          <br />
          Media
        </div>
      </Link>
    </div>
  );
};

export default Logo;
