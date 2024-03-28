// DashboardHome.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  // List of dashboard items
  const dashboardItems = [
    { name: 'Skills', path: '/admin/skills', description: 'Manage your skills' },
    { name: 'Achievements', path: '/admin/achievements', description: 'Track your achievements' },
    { name: 'Projects', path: '/admin/projects', description: 'Organize your projects' },
    { name: 'Experiences', path: '/admin/experiences', description: 'Record your work experiences' },
    { name: 'Blogs', path: '/admin/blogs', description: 'Share your insights', count: 12 }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 p-4">Welcome to the Admin Dashboard</h2>
      <p className="p-2 mb-8">This is your admin dashboard where you can manage skills, achievements, projects, and experiences.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dashboardItems.map((item) => (
          <div key={item.name} className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div>
              <div className="text-xl font-medium text-black">{item.name}</div>
              <p className="text-gray-500">{item.description}</p>
              <Link to={item.path} className="block mt-4 text-blue-500 hover:text-blue-700">Go to {item.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;

