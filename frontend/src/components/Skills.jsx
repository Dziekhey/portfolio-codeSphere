
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
        <div className="lg:w-1/2">
          <div className="mb-14 flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skills.skill}</p>
              <span className="w-full h-2 rounded-md inline-flex mt-6">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className={` h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  style={{width: skills.proficiency}}
                >
                  <span className="absolute -top-7 right-0">{skills.proficiency}</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

// Skills.jsx
import React, { useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'React', proficiency: 90 },
    { name: 'Node.js', proficiency: 80 }
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [newProficiency, setNewProficiency] = useState('');

  const addSkill = (e) => {
    e.preventDefault();
    if (!newSkill || !newProficiency) {
      alert('Please enter both skill name and proficiency.');
      return;
    }
    const newSkillEntry = { name: newSkill, proficiency: Number(newProficiency) };
    setSkills([...skills, newSkillEntry]);
    setNewSkill('');
    setNewProficiency('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Manage Skills</h2>
      <form onSubmit={addSkill} className="space-y-4">
        <div>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a new skill"
            className="border-2 p-2 rounded mr-2"
          />
          <input
            type="number"
            value={newProficiency}
            onChange={(e) => setNewProficiency(e.target.value)}
            placeholder="Proficiency (%)"
            className="border-2 p-2 rounded"
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add</button>
      </form>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill.name} - {skill.proficiency}%</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

