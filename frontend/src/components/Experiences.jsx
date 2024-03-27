
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
        className="py-12 font-titleFont gap-20"
      >
        <div className="flex gap-10">
          <div className="flex w-1/2 gap-4">
            <h2 className="text-4xl font-bold">Educational Experience</h2>
          </div>
          <div className="flex w-1/2 gap-4">
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
        </div>
        <div className="flex gap-10 w-full">
          <div className="mt-14 w-1/2 border-l-black border-opacity-30 flex flex-col gap-10">
            {
              // eslint-disable-next-line react/prop-types
              experiences.length > 0 &&
                experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))
            }
          </div>
          <div className="mt-14 w-1/2 border-l-black border-opacity-30 flex flex-col gap-10">
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