// Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [liveDemo, setLiveDemo] = useState('');

  const addProject = (e) => {
    e.preventDefault();
    const newProject = { title, description, image, liveDemo };
    setProjects([...projects, newProject]);
    // Reset fields
    setTitle('');
    setDescription('');
    setImage('');
    setLiveDemo('');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Add a New Project</h2>
      <form onSubmit={addProject} className="space-y-4">
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="border-2 p-2 rounded w-full"></textarea>
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>Live Demo Link</label>
          <input type="url" value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)} className="border-2 p-2 rounded w-full" />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Project</button>
      </form>
      <div>
        <h3 className="text-md font-semibold">Projects</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="my-2">
              <div>Title: {project.title}</div>
              <div>Description: {project.description}</div>
              {project.image && <img src={project.image} alt={project.title} className="max-w-xs mt-2" />}
              {project.liveDemo && <div>Live Demo: <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">View</a></div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;

