
import './App.css'; 
import About from './sections/about/About';
import Banner from './sections/banner/Banner';
import Footer from './sections/footer/Footer';
import Navbar from './sections/navbar/Navbar';
import Projects from './sections/projects/projects';



const App = () => {
  return (
    <>
<Navbar />
<Banner />
<About />
<Projects/>
<Footer />
    </>
    
  )
};

export default App;