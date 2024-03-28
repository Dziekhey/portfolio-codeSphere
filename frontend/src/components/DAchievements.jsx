import React, { useState } from 'react';

const Achievements = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [achievementsList, setAchievementsList] = useState([
    { title: 'Published a technical article on React', description: 'Wrote an in-depth article on optimizing React applications.', certificate: 'https://via.placeholder.com/150' },
    { title: 'Completed a marathon', description: 'Finished the Boston Marathon with a personal best time.', certificate: 'https://via.placeholder.com/150' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, using a placeholder for the certificate
    // In a real scenario, you would upload the certificate to a server or cloud storage
    // and get back a URL for the uploaded file
    const newAchievement = {
      title,
      description,
      certificate: URL.createObjectURL(certificate) // Temporarily create a URL for the file
    };
    setAchievementsList([...achievementsList, newAchievement]);
    // Reset form fields
    setTitle('');
    setDescription('');
    setCertificate(null);
  };

  const handleFileChange = (e) => {
    setCertificate(e.target.files[0]);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Add a New Achievement</h2>
      <form onSubmit={handleSubmit} className="my-4 space-y-2">
        <input
          className="border-2 border-gray-200 rounded p-2 w-full"
          type="text"
          placeholder="Achievement title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border-2 border-gray-200 rounded p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          className="border-2 border-gray-200 rounded p-2 w-full"
          type="file"
          onChange={handleFileChange}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Achievement</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievementsList.map((achievement, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <h3 className="font-bold text-xl mb-2">{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.certificate && <img src={achievement.certificate} alt="Certificate" className="mt-2" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
