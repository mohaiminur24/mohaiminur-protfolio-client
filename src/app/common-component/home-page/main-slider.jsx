import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const MainSlider = () => {
  return (
    <div className="w-full min-h-[400px] h-[calc(100vh)] grid grid-cols-1 md:grid-cols-2 px-20 justify-center items-center bg-slate-50">
      <div className="order-2 md:order-1">
        <div className="flex flex-row gap-2 py-2 px-3 w-fit rounded-3xl justify-center items-center mb-3 shadow-red-300 shadow-sm border animate-bounce">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
          <div className={inter.className}>
            <h3 className="text-sm text-primary font-bellefair">
              Looking for a Developer
            </h3>
          </div>
        </div>
        <h1 className="text-5xl font-robato font-bold">
          Here i'am <span className="text-primary">Mohaiminur</span>
        </h1>
        <h2 className={`mt-5 text-xs font-robato text-secondary`}>
          In the realm of software engineering, my commitment to your
          satisfaction is mirrored by an unwavering dedication to producing work
          that exemplifies the zenith of quality. Each project is approached
          with a meticulous focus on excellence, ensuring that your trust in my
          capabilities is met with consistently outstanding results.
        </h2>
        <div className="mt-5 flex gap-3">
          <button className="primaryButton">Hire Me</button>
          <button className="secondaryButton">
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-end order-1 md:order-2">
        <Image
          width={400}
          height={200}
          alt="computer"
          src="/image/sliderImage.webp"
        />
      </div>
    </div>
  );
};

export default MainSlider;
