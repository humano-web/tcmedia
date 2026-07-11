import Image from "next/image";
import FootMenu from "./footMenu";

const Footer = () => {
  return (
    <footer className="2xl:flex w-full min-h-screen 2xl:flex-col items-start justify-center gap-6 px-3 py-6 sm:gap-8 sm:p-6 lg:p-8 snap-start snap-always">
      <div className="2xl:flex w-full 2xl:flex-col items-start justify-start gap-7 rounded-xl border-4 border-tcteal-dark bg-tcteal px-3 py-6 sm:gap-9 sm:px-4 sm:py-8 long-shadow-teal-dark">
        <div className="self-stretch 2xl:flex flex-col 2xl:flex-row justify-start items-start lg:items-center gap-8 lg:gap-12">
          <div className="relative 2xl:flex h-16 w-full lg:w-2/4 justify-center items-center sm:h-20">
            <div className="absolute w-full justify-start text-tcteal-light lg:text-3xl xl:text-5xl 2xl:text-6xl font-medium font-['Montserrat'] leading-tight tracking-tighter"
              style={{
                WebkitTextFillColor: "white",
                WebkitTextStrokeWidth: "4px",
                WebkitTextStrokeColor: "#002828",
              }}
            >
              Thurston Community Media
            </div>
            <div className="absolute w-full justify-start text-tcteal-light md:text-3xl xl:text-5xl 2xl:text-6xl font-medium font-['Montserrat'] leading-tight tracking-tighter" >
              Thurston Community Media
            </div>
          </div>
          <div className="2xl:flex 2xl:flex-1 2xl:flex-col justify-center items-start lg:items-end gap-4 w-full">
            <div className="2xl:flex w-full  2xl:flex-row justify-start items-start sm:items-center gap-3 sm:gap-4">
              <div
                className="2xl:flex h-12 w-full sm:w-auto px-4 py-3 bg-tcteal-light border-b border-red-500 justify-start items-center gap-2"
              >
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.598 7L11.345 12.12C11.5281 12.2831 11.7648 12.3732 12.01 12.3732C12.2552 12.3732 12.4919 12.2831 12.675 12.12L18.423 7H5.598ZM20 8.273L14.006 13.614C13.4565 14.1037 12.7461 14.3744 12.01 14.3744C11.2739 14.3744 10.5635 14.1037 10.014 13.614L4 8.254V17H20V8.273ZM4 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V17C22 17.5304 21.7893 18.0391 21.4142 18.4142C21.0391 18.7893 20.5304 19 20 19H4C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5V5Z"
                      fill="#697077"
                    />
                  </svg>
                </div>
                <div className="justify-start text-zinc-500 2xl:text-base font-normal font-['Montserrat'] leading-6">
                  Enter your email to get the latest news...
                </div>
              </div>
              <div
                className="h-12 px-3 py-4 bg-tcgreen border-2 border-tcgreen 2xl:flex justify-center items-center"
              >
                <div className="px-4 2xl:flex justify-center items-center gap-2.5">
                  <div className="justify-start text-gray-900 2xl:text-base font-medium font-['Montserrat'] leading-4 tracking-wide">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px bg-tcteal-dark" />
        <div className="w-full 2xl:flex  2xl:flex-row content-center items-start xl:items-center gap-6">
          {/* <div className="w-full xl:w-1/4 2xl:flex 2xl:flex-col justify-start items-start gap-2">
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Home
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Classes
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Services
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Facilities
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/4 2xl:flex 2xl:flex-col justify-start items-start gap-2">
            <div
              className="2xl:flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Volunteer
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Membership
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                Events
              </div>
            </div>
            <div
              className="2xl:inline-flex justify-start items-center gap-2"
            >
              <div className="justify-start text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-6">
                About
              </div>
            </div>
          </div> */}
          <FootMenu />

          <div className="w-full xl:w-1/4 2xl:flex 2xl:flex-row justify-start xl:justify-end items-start sm:items-center gap-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.8020138114125!2d-122.94866429999999!3d47.0441157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549174fd39e09fa7%3A0x2695135b767f778d!2sTCMedia%20-%20Thurston%20Community%20Media!5e0!3m2!1sen!2sus!4v1779427404149!5m2!1sen!2sus"
              width="228"
              height="228"
              style={{ outline: 0 }}
              loading="lazy"
              className="w-56 h-56 rounded-lg shadow-[4px_4px_0px_0px_rgba(12,77,77,1.00)] border-[3px] border-tcteal-dark"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
            <div className="w-128 text-left justify-center">
              <span className="text-tcteal-dark 2xl:text-3xl font-bold font-['Montserrat'] leading-7">
                440 Yauger Way SW Olympia, WA
              </span>
              <span className="text-tcteal-dark 2xl:text-lg font-bold font-['Montserrat'] leading-4">
                {" "}
              </span>
              <span className="text-tcteal-dark 2xl:text-2xl font-bold font-['Montserrat'] leading-5">
                360.956.3100
              </span>
            </div>
          <div className="w-full xl:w-1/3 2xl:flex 2xl:flex-col justify-start items-start gap-6">
            <div className="2xl:flex 2xl:flex-col justify-start items-start gap-4">
              <div
                className="py-3 2xl:inline-flex justify-start items-center gap-2"
              >
                <div className="justify-start text-gray-900 2xl:text-lg font-bold leading-5">
                  Download our App!
                </div>
              </div>
              <div className="w-full 2xl:flex justify-start items-start gap-2">
              </div>
            </div>
            <div className="2xl:flex 2xl:flex-col justify-start items-start gap-2">
              <div
                data-active="False"
                data-badge="false"
                data-icon-left="false"
                data-icon-right="false"
                data-menu-type="Horizontal"
                data-text="true"
                data-vertical="False"
                className="py-3 2xl:inline-flex justify-start items-center gap-2"
              >
                <div className="justify-start text-gray-900 2xl:text-lg font-bold font-['Roboto'] leading-5">
                  Join Us
                </div>
              </div>
              <div className="w-96 2xl:inline-flex justify-start items-center gap-4">
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.812 5.01699H6.145C3.855 5.01699 2 6.85199 2 9.11599V14.884C2 17.148 3.856 18.984 6.145 18.984H17.812C20.102 18.984 21.957 17.148 21.957 14.884V9.11599C21.957 6.85199 20.101 5.01599 17.812 5.01599V5.01699ZM15.009 12.28L9.552 14.855C9.51872 14.871 9.48192 14.8784 9.44503 14.8763C9.40815 14.8743 9.37237 14.863 9.34103 14.8434C9.3097 14.8239 9.28382 14.7967 9.2658 14.7645C9.24779 14.7322 9.23822 14.6959 9.238 14.659V9.34999C9.23867 9.31286 9.24872 9.27651 9.26722 9.24432C9.28573 9.21212 9.31208 9.18513 9.34382 9.16587C9.37556 9.1466 9.41167 9.13568 9.44877 9.13413C9.48587 9.13258 9.52276 9.14044 9.556 9.15699L15.014 11.892C15.0504 11.9101 15.0809 11.9381 15.102 11.9728C15.1232 12.0075 15.1341 12.0474 15.1336 12.0881C15.1331 12.1287 15.1211 12.1683 15.0991 12.2025C15.077 12.2366 15.0458 12.2638 15.009 12.281V12.28Z"
                      fill="#160F29"
                    />
                  </svg>
                </div>
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04598 5.865V8.613H7.03198V11.973H9.04598V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.94298 2 9.04598 5.363 9.04598 5.865Z"
                      fill="#160F29"
                    />
                  </svg>
                </div>
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 5.90704C21.2504 6.23442 20.4565 6.44908 19.644 6.54404C20.4968 6.04327 21.138 5.24915 21.448 4.31004C20.64 4.78037 19.7587 5.11164 18.841 5.29004C18.4545 4.88525 17.9897 4.56343 17.4748 4.34422C16.9598 4.12501 16.4056 4.01301 15.846 4.01504C13.58 4.01504 11.743 5.82504 11.743 8.05504C11.743 8.37104 11.779 8.68004 11.849 8.97504C10.2236 8.89774 8.63212 8.48245 7.17617 7.75568C5.72022 7.02891 4.43176 6.00662 3.393 4.75404C3.02883 5.36844 2.83742 6.06982 2.839 6.78404C2.8397 7.45201 3.00683 8.10927 3.32529 8.69644C3.64375 9.2836 4.1035 9.78215 4.663 10.147C4.01248 10.126 3.37602 9.95237 2.805 9.64004V9.69004C2.805 11.648 4.22 13.281 6.095 13.653C5.74261 13.7465 5.37958 13.7939 5.015 13.794C4.75 13.794 4.493 13.769 4.242 13.719C4.51008 14.527 5.02311 15.2314 5.70982 15.7344C6.39653 16.2374 7.22284 16.5141 8.074 16.526C6.61407 17.6506 4.82182 18.2581 2.979 18.253C2.647 18.253 2.321 18.233 2 18.197C3.88125 19.3877 6.06259 20.0183 8.289 20.015C15.836 20.015 19.962 13.858 19.962 8.51904L19.948 7.99604C20.7529 7.42971 21.4481 6.72189 22 5.90704Z"
                      fill="#160F29"
                    />
                  </svg>
                </div>
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                      fill="#160F29"
                    />
                    <path
                      d="M11.982 6.81897C10.6134 6.82109 9.30154 7.36576 8.33391 8.33358C7.36627 9.3014 6.82186 10.6134 6.82001 11.982C6.82159 13.3509 7.36603 14.6633 8.33391 15.6314C9.30179 16.5994 10.6141 17.1441 11.983 17.146C13.3521 17.1444 14.6647 16.5998 15.6328 15.6317C16.6008 14.6636 17.1454 13.3511 17.147 11.982C17.1449 10.6131 16.5999 9.30085 15.6317 8.33316C14.6634 7.36547 13.3509 6.82129 11.982 6.81997V6.81897ZM11.982 15.138C11.1452 15.138 10.3428 14.8056 9.75109 14.2139C9.15941 13.6222 8.82701 12.8197 8.82701 11.983C8.82701 11.1462 9.15941 10.3437 9.75109 9.75205C10.3428 9.16037 11.1452 8.82797 11.982 8.82797C12.8188 8.82797 13.6213 9.16037 14.2129 9.75205C14.8046 10.3437 15.137 11.1462 15.137 11.983C15.137 12.8197 14.8046 13.6222 14.2129 14.2139C13.6213 14.8056 12.8188 15.138 11.982 15.138Z"
                      fill="#160F29"
                    />
                    <path
                      d="M17.156 8.09497C17.8392 8.09497 18.393 7.54115 18.393 6.85797C18.393 6.1748 17.8392 5.62097 17.156 5.62097C16.4728 5.62097 15.919 6.1748 15.919 6.85797C15.919 7.54115 16.4728 8.09497 17.156 8.09497Z"
                      fill="#160F29"
                    />
                  </svg>
                </div>
                <div data-svg-wrapper className="relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z"
                      fill="#160F29"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-start text-tcteal-dark 2xl:text-lg font-bold font-['Montserrat'] leading-4">
          TCMedia is a 501(c)(3) non-profit. Your donation is tax deductible.
          EIN: 91-1269977
        </div>
        <div className="self-stretch h-px bg-tcteal-dark" />
        <div className="self-stretch 2xl:inline-flex justify-start items-center gap-12">
          <div className="justify-start text-gray-900 2xl:text-sm font-normal leading-5">
            Thurston Community Media @ 2026. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
