import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import codeimage from "../../assets/IMG_7096.jpg";
import Typewriter from "typewriter-effect";

function Banner() {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = typewriterRef.current;

    const loopTypewriter = () => {
      typewriter.reset().start(loopTypewriter);
    };

    if (typewriter) {
      loopTypewriter();
    }
  }, []);

  return (
    <animated.div className="dark:bg-gray-900" style={animationProps}>
      <div className="container mx-auto py-9 md:py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row justify-center items-stretch mx-4">
          <div className="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1
                style={{
                  position: "relative",
                  top: "30px",
                  left: "10px",
                  color: "black",
                  fontWeight: "700",
                  fontSize: "2vw",
                }}
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriterRef.current = typewriter;
                    typewriter
                      .typeString("It is a long established fact")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("that a reader will be distracted by the readable content of a page")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("when looking at its layout.")
                      .start();
                  }}
                />
              </h1>
            </div>
          </div>
          <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
            <div className="relative w-full h-full">
              <img src={codeimage} alt="a hand with programming languages" className="w-full h-full lg:block hidden" />
              <div className="lg:hidden flex justify-center items-center">
                <img src={codeimage} alt="Aa hand with programming languages" className="w-full h-auto" />
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:hidden">
              <button className="dark:hover:bg-gray-800 dark:bg-white dark:hover:text-gray-50 dark:text-gray-800 bg-gray-800 text-base md:text-xl font-semibold leading-tight text-white flex justify-between items-center px-5 py-4 lg:py-7 lg:px-7 w-full md:w-5/12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
                Discover More
                <div>
                  <svg className="fill-stroke" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M0.453735 12H14.4537" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.4539 16L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.4539 8L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="21.7269" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

export default Banner;
