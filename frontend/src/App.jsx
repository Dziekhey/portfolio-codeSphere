
import './App.css';
import About from './sections/about/About';
import Banner from './sections/banner/Banner';
import Footer from './sections/footer/Footer';
import Navbar from './sections/navbar/Navbar';
import Projects from './sections/projects/projects';


import ComfortPage from './pages/Individual/ComfortPage';
import KennethPage from './pages/Individual/KennethPage';

// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AdminDashboard from './pages/admin/AdminDashboard.jsx';
// import AdminLogin from './components/AdminLogin.jsx';



const App = () => {
  return (
    <>

<Navbar />
<Banner />
<About />
<Projects/>
<Footer />

<ComfortPage />

    </>
    
  )
};

export default App;