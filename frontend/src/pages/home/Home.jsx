import React from 'react'
import Navbar from '../../sections/navbar/Navbar'
import Banner from '../../sections/banner/Banner'
import About from '../../sections/about/About'
import Projects from '../../sections/projects/projects'
import { Contact } from '../../sections/contact/Contact'
import Footer from '../../sections/footer/Footer'
import Achievement from '../../sections/achievements/Achievement'
import Blog from '../../sections/blogs/Blogs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Projects/>
        <Achievement/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home