import React from "react";
import { motion } from "framer-motion";

const Skills = (skills) => {
  return (
    <div className="p-8">
        <div>
            <h1 className="text-5xl font-medium pt-6 pb-3">Skills</h1>
        </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-row lgl:flex-row gap-10 lgl:gap-20"
      >
        <div className="w-1/2 lgl:w-1/2">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Programming Languages and Liberies</h2>
          </div>
          <div className='className="mt-14 w-full flex flex-col gap-6'>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">HTML</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">50%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">BOOTSTRAP</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">TAILWIND</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2 lgl:w-1/2">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Software Proficiency and Frameworks
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">VISUAL STUDIO CODE</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">GIT</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JIRA</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">50%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">REACT.JS</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">50%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">NODE.JS</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">50%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
