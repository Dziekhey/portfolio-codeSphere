import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Blog() {
  return (
    <>
      
      <div id="bloger">

        <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">

          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Latest from our BlogSphere
          </h1>
          <div className="mt-12 lg:mt-24">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">


            </div>
            <div className="h-5 w-2" />
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                alt="games"
              />
              <div className="py-2 px-4 w-full flex justify-between bg-gray-800">
                <p className="text-sm text-white font-semibold tracking-wide">
                
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  
                </p>
              </div>
              <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                  Transactions
                </h1>
                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                  Find the latest events updates or create events,
                  concerts, conferences, workshops...
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">
                    <a className="icons" href={"https://thecillaazil.blog/2023/08/21/designing-for-simplicity-and-impact/"} target="_blank" rel="noopener noreferrer">
                      <button>Read more...</button>
                      </a>
                    </p>
                  </div>


                </p>

              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                alt="notes"
              />
              <div className="py-2 px-4 w-full flex justify-between bg-gray-800">
                <p className="text-sm text-white font-semibold tracking-wide">
                 
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                 
                </p>
              </div>
              <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                  Transactions
                </h1>
                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                  Find the latest events updates or create events,
                  concerts, conferences, workshops...
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">
                    <a className="icons" href={"https://thecillaazil.blog/2023/08/21/crafting-seamless-mobile-experience/"} target="_blank" rel="noopener noreferrer">
                      <button>Read more...</button>
                      </a>
                    </p>
                  </div>

                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div>
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                alt="laptop"
              />
              <div className="py-2 px-4 w-full flex justify-between bg-gray-800">
                <p className="text-sm text-white font-semibold tracking-wide">
                 
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                  
                </p>
              </div>
              <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                  Transactions
                </h1>
                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                  Find the latest events updates or create events,
                  concerts, conferences, workshops...
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">
                    <a className="icons" href={"https://thecillaazil.blog/2023/08/21/the-art-of-visual-storytelling/"} target="_blank" rel="noopener noreferrer">
                      <button>Read more...</button>
                      </a>
                    </p>
                  </div>

                </p>
              </div>
            </div>
            <div>
              <img
                className="w-full"
                src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                alt="worker"
              />
              <div className="py-2 px-4 w-full flex justify-between bg-gray-800">
                <p className="text-sm text-white font-semibold tracking-wide">
                 
                </p>
                <p className="text-sm text-white font-semibold tracking-wide">
                 
                </p>
              </div>
              <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">
                  Transactions
                </h1>
                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">
                  Find the latest events updates or create events,
                  concerts, conferences, workshops...
                  <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                    <p className="text-base tracking-wide text-indigo-500">
                    <a className="icons" href={"https://thecillaazil.blog/2024/03/12/discovering-the-fedora-universe-beyond-the-hat/"} target="_blank" rel="noopener noreferrer">
                      <button>Read more...</button>
                      </a>
                    </p>
                  </div>

                </p>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Blog;
