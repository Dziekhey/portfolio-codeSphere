// Achievements.js
import React, { useState } from 'react';

const Achievements = () => {
  const [title, setTitle] = useState('');
  const [achievementsList, setAchievementsList] = useState(['Published a technical article on React', 'Completed a marathon']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAchievementsList([...achievementsList, title]);
    setTitle('');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add a New Achievement</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          className="border-2 border-gray-200 rounded p-2 mr-2"
          type="text"
          placeholder="Achievement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Achievement</button>
      </form>
      <div>
        <h3 className="text-md font-semibold">Achievements</h3>
        <ul>
          {achievementsList.map((achievement, index) => (
            <li key={index} className="my-2">{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
