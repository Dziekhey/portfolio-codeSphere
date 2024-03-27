import React from 'react';
import './App.css'; 
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminLogin from './components/AdminLogin.jsx';

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<AdminLogin />} />
    //     <Route path="/admin/*" element={<AdminDashboard />} />
    //     <Route path="/" element={<Navigate replace to="/login" />} />
    //   </Routes>
    // </Router>
    <>
      {/* <AdminLogin /> */}
      <AdminDashboard />
    </>
  );
};

export default App;