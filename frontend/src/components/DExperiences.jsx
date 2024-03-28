// Experiences.js
import React, { useState } from 'react';
const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [experienceType, setExperienceType] = useState('');
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [organizationLocation, setOrganizationLocation] = useState('');
  const [userId, setUserId] = useState('');

  // Users for selection
  const users = ['Priscilla', 'Kenneth', 'Comfort', 'Sandra'];

  const addExperience = (e) => {
    e.preventDefault();
    const newExperience = {
      experienceType,
      title,
      startDate,
      endDate,
      description,
      organizationName,
      organizationLocation,
      userId
    };
    setExperiences([...experiences, newExperience]);
    // Reset form fields
    setExperienceType('');
    setTitle('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setOrganizationName('');
    setOrganizationLocation('');
    setUserId('');
  };

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 bg-gray-200 text-center p-3">Experiences</h1>
      <h2 className="text-xl font-semibold">Add a New Experience</h2>
      <form onSubmit={addExperience} className="space-y-4">
        <div>
          <label>Type of Experience</label>
          <select value={experienceType} onChange={(e) => setExperienceType(e.target.value)} className="border-2 p-2 rounded w-full">
            <option value="">Select Experience Type</option>
            <option value="Educational">Educational Experience</option>
            <option value="Work">Work Experience</option>
          </select>
        </div>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>Start Date (Month and Year)</label>
          <input type="month" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>End Date (Month and Year)</label>
          <input type="month" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="border-2 p-2 rounded w-full"></textarea>
        </div>
        <div>
          <label>Organization Name</label>
          <input type="text" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} placeholder="Organization Name" className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>Organization Location</label>
          <input type="text" value={organizationLocation} onChange={(e) => setOrganizationLocation(e.target.value)} placeholder="Organization Location" className="border-2 p-2 rounded w-full" />
        </div>
        <div>
          <label>User</label>
          <select value={userId} onChange={(e) => setUserId(e.target.value)} className="border-2 p-2 rounded w-full">
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user} value={user}>{user}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Experience</button>
      </form>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>{experience.title} ({experience.userId}) - {experience.startDate} to {experience.endDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;

