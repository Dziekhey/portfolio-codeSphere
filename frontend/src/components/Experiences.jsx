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
        <div className="flex w-full py-5">
          <h2 className="text-4xl font-bold">Experiences</h2>
        </div>

        <div className="">
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
  );
};

export default Experiences;
