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
