"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import Menu from "./menu";


function Header() {

  const [open, setOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


  return (
    <>
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
            className="size-32 2xl:flex absolute origin-center rotate-[-30deg] justify-center items-center text-tcteal 2xl:text-4xl font-extrabold font-['Montserrat'] leading-7 tracking-tighter"
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
          <div className="size-32 flex absolute origin-center rotate-[-30deg] justify-center items-center text-tcteal-dark text-4xl font-extrabold font-['Montserrat'] leading-7 tracking-tighter">
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
        <div className="flex flex-row 2xl:hidden absolute top-10 right-5 text-2xl font-bold font-['Montserrat'] text-white">
          <Image
            alt=""
            width={168}
            height={64}
            className="w-24 h-auto text-shadow-black"
            src="/tc_white.png"
          />
          <span className="text-3xl font-bold font-['Montserrat'] text-white text-shadow-lg leading-6 tracking-tighter flex items-end text-shadow-black">
            TC<br />Media
          </span>

        </div>
      </header>

      <header className="fixed top-3 left-3 right-3 z-50 md:hidden">
        <div
          className="flex items-center justify-between rounded-full px-3 py-2 shadow-md bg-tcteal"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image width={500} height={64} src="/tcm_hlogo.png" alt="TC Media" className="w-16 h-auto" />
            <div className="relative flex items-center justify-center w-xs h-8">

              <span className="font-montserrat font-semibold text-white text-3xl align-middle text-right leading-3 text-shadow-md/50 absolute -left-8"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#002828",
                }}

              >
                TC Media
              </span>
              <span className="font-montserrat font-semibold text-white text-3xl align-middle text-right leading-3 text-shadow-md/50 absolute -left-8"
              >
                TC Media
              </span>
            </div>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-transform active:scale-95"
          >
            <span className="relative block h-6 w-8">
              <span
                className={`absolute left-0 top-0 h-1 w-8 bg-tcteal-dark rounded-full transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-1 w-8 bg-tcteal-dark rounded-full transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"
                  }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-1 w-8 bg-tcteal-dark rounded-full transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </header>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Slide-out drawer */}
      <nav
        id="mobile-nav-drawer"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80%] bg-neutral-950 shadow-xl transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <span className="font-montserrat font-semibold text-white text-sm">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-tcgreen"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rotate-45 bg-black" />
              <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-black" />
            </span>
          </button>
        </div>

        <ul className="flex flex-col px-2 pt-2">
          {/* {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-4 font-montserrat font-medium text-lg text-white border-b border-white/10 active:bg-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))} */}
        </ul>

        <div className="px-5 pt-6">
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full py-3 text-center font-semibold bg-tcgreen"
          >
            Donate Today
          </Link>
        </div>
      </nav>

    </>
  );
}

export default Header;
