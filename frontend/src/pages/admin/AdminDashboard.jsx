// Desc: Admin Dashboard Page
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Skills from '../../components/DSkills.jsx';
import Achievements from '../../components/DAchievements.jsx';
import Projects from '../../components/DProjects.jsx';
import Experiences from '../../components/DExperiences.jsx';
import DashboardOverview from '../../components/DashboardOverview.jsx';

const AdminDashboard = () => {
  return (
    <Router>
      <div className="flex">
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <Link to="/admin" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard Overview</Link>
              </li>
              <li>
                <Link to="/admin/skills" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Skills</Link>
              </li>
              <li>
                <Link to="/admin/achievements" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Achievements</Link>
              </li>
              <li>
                <Link to="/admin/projects" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Projects</Link>
              </li>
              <li>
                <Link to="/admin/experiences" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text:white hover:bg-gray-100 dark:hover:bg-gray-700">Experiences</Link>
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-grow">
          <Routes>
            <Route path="/admin" element={<DashboardOverview />} />
            <Route path="/admin/skills" element={<Skills />} />
            <Route path="/admin/achievements" element={<Achievements />} />
            <Route path="/admin/projects" element={<Projects />} />
            <Route path="/admin/experiences" element={<Experiences />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AdminDashboard;
