import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="2xl:flex justify-center items-center relative h-14">
      <Link href="/" className="w-50 h-auto">
        <Image
          alt=""
          width={168}
          height={64}
          className="w-28 h-auto absolute left-0 z-10 top-0"
          src="/tcm_hlogo.png"
        />
        <div
          className="text-right justify-center text-white 2xl:text-5xl font-medium font-['Montserrat'] leading-7 long-shadow-dark-teal-text absolute right-0 z-10 top-0"
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
        <div className="text-right justify-center text-white 2xl:text-5xl font-medium font-['Montserrat'] leading-7 long-shadow-dark-teal-text absolute right-0 z-10 top-0">
          TC
          <br />
          Media
        </div>
      </Link>
    </div>
  );
};

export default Logo;
