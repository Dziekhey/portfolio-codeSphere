/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills }) => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <div className="lgl:w-1/2">
          <div className="mb-14 flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skills.skill}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={`w-[${skills.proficiency}] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                >
                  <span className="absolute -top-7 right-0">{skills.proficiency}</span>
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
