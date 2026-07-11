import Logo from "./logo";
import Menu from "./menu";

function Header() {
  return (
    <header className="hidden 2xl:flex 2xl:flex-row fixed z-50 left-0 right-0 justify-center items-center object-center gap-3 pt-8">
      <div className="basis-6 self-stretch relative 2xl:flex justify-center items-center">
        <div data-svg-wrapper className="scale-125">
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            className="slow-spinner origin-center absolute left-1 top-1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.2139 14.4387L85.2146 33.3046L101.653 42.7762L88.9461 56.8639L96.6774 74.1886L78.117 78.1171L74.1886 96.6774L56.8639 88.9461L42.7762 101.653L33.3046 85.2147L14.4387 87.214L16.438 68.3481L-4.90966e-05 58.8764L12.7065 44.7888L4.97519 27.464L23.5356 23.5356L27.464 4.97524L44.7887 12.7066L58.8764 -1.89506e-08L68.348 16.438L87.2139 14.4387Z"
              fill="#002828"
            />
          </svg>
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            className="slow-spinner origin-center"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.2139 14.4387L85.2146 33.3046L101.653 42.7762L88.9461 56.8639L96.6774 74.1886L78.117 78.1171L74.1886 96.6774L56.8639 88.9461L42.7762 101.653L33.3046 85.2147L14.4387 87.214L16.438 68.3481L-4.90966e-05 58.8764L12.7065 44.7888L4.97519 27.464L23.5356 23.5356L27.464 4.97524L44.7887 12.7066L58.8764 -1.89506e-08L68.348 16.438L87.2139 14.4387Z"
              fill="#1EBDBD"
            />
          </svg>
        </div>
        <div
          className="size-32 2xl:flex absolute origin-center rotate-[-30deg] justify-center items-center text-teal-900 2xl:text-4xl font-extrabold font-['Montserrat'] leading-7 tracking-tighter"
          style={{
            WebkitTextFillColor: "white",
            WebkitTextStrokeWidth: "10px",
            WebkitTextStrokeColor: "#1EBDBD",
          }}
        >
          Donate
          <br />
          Today!
        </div>
        <div className="size-32 2xl:flex absolute origin-center rotate-[-30deg] justify-center items-center text-tcteal-dark 2xl:text-4xl font-extrabold font-['Montserrat'] leading-7 tracking-tighter">
          Donate
          <br />
          Today!
        </div>
      </div>
      <div className="py-4 relative bg-tcteal/75 rounded-full border-6 border-tcteal-dark 2xl:flex justify-center items-center gap-2 long-shadow-teal-dark">
        <div className="2xl:flex-1 h-16 2xl:flex justify-start items-center">
          <div className="self-stretch px-4 2xl:flex justify-start items-center gap-4 2xl:flex-wrap content-center">
            <Logo />
            <Menu />
          </div>
        </div>
        <div className="size-20 relative bg-tcteal-dark rounded-full 2xl:flex justify-center items-center me-3">
          <div className="size-20 bg-tcteal-dark absolute rounded-full animate-ping"></div>
          <div
            className="w-24 h-16 absolute 2xl:flex items-center justify-center 2xl:text-5xl font-bold font-['Montserrat']"
            style={{
              WebkitTextFillColor: "white",
              WebkitTextStrokeWidth: "15px",
              WebkitTextStrokeColor: "#002828",
            }}
          >
            LIVE
          </div>
          <div className="w-24 h-16 absolute text-white 2xl:flex items-center justify-center 2xl:text-5xl font-bold font-['Montserrat']">
            LIVE
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
