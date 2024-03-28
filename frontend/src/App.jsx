
import './App.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './sections/about/About';
import Banner from './sections/banner/Banner';
import Footer from './sections/footer/Footer';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from './sections/projects/projects';
import { Contact } from './sections/contact/Contact';
import Home from './pages/home/Home';
import Blog from './sections/blogs/Blogs';
import AdminDashboard from "./pages/admin/AdminDashboard"
import Achievement from './sections/achievements/Achievement';
import AdminLogin from './components/AdminLogin';






// import AdminDashboard from './pages/admin/AdminDashboard.jsx';
// import AdminLogin from './components/AdminLogin.jsx';



function App() {
  const router = createBrowserRouter ([
    {path: "/", element: <Home/>},
    {path:"/admindashboard", element: <AdminDashboard/>},
    {path:"/adminlogin", element: <AdminLogin/>},
    {path:"/banner", element: <Banner/>},
    {path:"/about", element: <About/>},
    {path:"/projects", element: <Projects/>},
    {path:"/achievement", element: <Achievement/>},
     {path:"/blog", element: <Blog/>},
     {path:"/contact", element:<Contact/>},
     {path:"/footer", element: <Footer/>}

  ])
  
  return (
    <>
    <RouterProvider router={router}/>

   </>
  );
}

export default App;
