
import './App.css';
import About from './sections/about/About';
import Banner from './sections/banner/Banner';
import Footer from './sections/footer/Footer';
import Navbar from './sections/navbar/Navbar';
import Projects from './sections/projects/projects';


import ComfortPage from './pages/Individual/ComfortPage';
import KennethPage from './pages/Individual/KennethPage';

import DialogFlowMessenger from './components/DialogflowMessenger.jsx';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
// import AdminLogin from './components/AdminLogin.jsx';



const App = () => {
  return (
    <>

<Navbar />
<Banner />
<About />
<Projects/>
<Footer />

<KennethPage />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<AdminLogin />} />
    //     <Route path="/admin/*" element={<AdminDashboard />} />
    //     <Route path="/" element={<Navigate replace to="/login" />} />
    //   </Routes>
    // </Router>
    // <>
    // <AdminLogin />
    // <AdminDashboard />
    // </>
  )
};

export default App;