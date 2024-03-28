
import './App.css'; 
import DialogFlowMessenger from './components/DialogflowMessenger.jsx';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
// import AdminLogin from './components/AdminLogin.jsx';


const App = () => {
  return (
    
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<AdminLogin />} />
    //     <Route path="/admin/*" element={<AdminDashboard />} />
    //     <Route path="/" element={<Navigate replace to="/login" />} />
    // <Route path="/" element={<YourHomeComponent />} />
    //   </Routes>
    // </Router>
    <>
    {/* <AdminLogin /> */}
    <AdminDashboard />
    <DialogFlowMessenger />
    </>
  )
};

export default App;