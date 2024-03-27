
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Experiences = ({ experiences }) => {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className=""
      >
        <div className="flex w-full">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold">Educational Experience</h2>
          </div>
          <div className="w-1/2 ">
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
        </div>
        <div className="">
          <div className="">
            {
              // eslint-disable-next-line react/prop-types
              experiences.length > 0 &&
                experiences.map((experience, index) => (
                  <ExperienceCard  />
                ))
            }
          </div>
          <div className="">
          
            {
              // eslint-disable-next-line react/prop-types
              experiences.length > 0 &&
                experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))
            }
          </div>
        </div>
      </motion.div>
    </div>
  )
};

export default Experiences;