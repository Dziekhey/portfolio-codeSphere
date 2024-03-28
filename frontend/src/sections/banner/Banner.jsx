import React from "react";
import codeimage from "../../assets/IMG_7096.jpg";

function Banner() {
  return (
    <div className="relative">
      <div className="dark:bg-gray-900 absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"style={{ backgroundImage: `url(${codeimage})` }}></div>
      <div className="container mx-auto py-9 md:py-12 lg:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-stretch mx-4">
          <div className="lg:w-4/12 flex justify-center items-center">
            <div>
              <h1
                className="text-black font-bold text-3xl lg:text-5xl"
                style={{
                  zIndex: 1, // Ensures text is above the image
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" // Adding text shadow for better visibility
                }}
              >
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
