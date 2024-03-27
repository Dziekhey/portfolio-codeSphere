
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

// Experiences.js
import React, { useState } from 'react';

const Experiences = () => {
  const [experience, setExperience] = useState('');
  const [experiencesList, setExperiencesList] = useState(['Web Developer at XYZ Corp', 'Software Engineer at ABC Inc']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperiencesList([...experiencesList, experience]);
    setExperience('');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add a New Experience</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          className="border-2 border-gray-200 rounded p-2 mr-2"
          type="text"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Experience</button>
      </form>
      <div>
        <h3 className="text-md font-semibold">Experiences</h3>
        <ul>
          {experiencesList.map((experience, index) => (
            <li key={index} className="my-2">{experience}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Experiences;
