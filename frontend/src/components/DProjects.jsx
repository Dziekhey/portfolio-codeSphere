// Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [project, setProject] = useState('');
  const [projectsList, setProjectsList] = useState(['Portfolio Website', 'E-commerce Platform']);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectsList([...projectsList, project]);
    setProject('');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add a New Project</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          className="border-2 border-gray-200 rounded p-2 mr-2"
          type="text"
          placeholder="Project name"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Project</button>
      </form>
      <div>
        <h3 className="text-md font-semibold">Projects</h3>
        <ul>
          {projectsList.map((project, index) => (
            <li key={index} className="my-2">{project}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
