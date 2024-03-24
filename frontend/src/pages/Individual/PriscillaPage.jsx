import React from 'react';
import Prilpic from '../../assets/Prilpic.jpg'
import ImgCard from "../../components/ImgCard.jsx";
import Skills from "../../components/Skills.jsx";
import Experiences from "../../components/Experiences.jsx";
import "./individual.css";

const PriscillaPage = () => {

  const ExperiencesData = [
    {
      type: "Education",
      title: "Nutrition and Food Science",
      start_date: "09-2018",
      end_date: "03-2023",
      description: "description",
      organisation: "University of Ghana",
      location: "Legon",
      user_id: "Sandra",
    },
    {
      type: "Education",
      title: "Web developer",
      start_date: "02-2024",
      end_date: "present",
      description: "description",
      organisation: "Mest Africa",
      location: "East Legon",
      user_id: "Sandra",
    },
    {
      type: "Work",
      title: "National Service Personnel",
      start_date: "11-2022",
      end_date: "10-2023",
      description: "description",
      organisation: "Accra Brewery PLC",
      location: "Graphic Road",
      user_id: "Sandra",
    },
    {
      type: "Work",
      title: "National Service Personnel",
      start_date: "11-2022",
      end_date: "10-2023",
      description: "description",
      organisation: "Accra Brewery PLC",
      location: "Graphic Road",
      user_id: "Sandra",
    },
  ];

  return (
    <div id="bg">
    {/* About division */}
    <div className="flex justify-center items-center">
      <h1 className="text-7xl font-extrabold py-6">ABOUT PRISCILLA</h1>
    </div>
    <div className="flex flex-row">
      <div className="shrink-0 w-96">
        <ImgCard Image={Prilpic} />
      </div>
      <div className="shrink w-150 flex text-center">
        <p className="py-20 px-10">
          Hello! I'm Sandra, an alumnus of the University of Ghana, Legon,
          where I majored in Nutrition and Food Science. Currently, I'm
          embarking on an exciting journey as a web developer trainee at MEST
          Africa. This dynamic blend of my academic background and current
          pursuit in technology reflects my passion for interdisciplinary
          exploration and innovation. With a solid foundation in nutrition
          science, I bring a unique perspective to the realm of web
          development, striving to merge these diverse fields to create
          meaningful digital solutions. My overarching goal is to carve a
          fulfilling career path in web development, leveraging my
          comprehensive skill set to contribute positively to the
          ever-evolving tech landscape. Beyond coding, I'm deeply committed to
          continuous learning and community engagement, believing in the
          transformative power of collaboration. I am enthusiastic about
          connecting with like-minded individuals who share my zeal for growth
          and exploration. Join me on this exhilarating journey as we navigate
          the boundless opportunities of technology, driven by curiosity,
          creativity, and a relentless pursuit of excellence.
        </p>
      </div>
    </div>

    {/* Skills division */}
    <Skills />

    {/* Experience division */}
    <Experiences experiences={ExperiencesData} />

    {/* Contact division*/}
    <div className="p-8 border-t-4 border-black">
      <div className="text-4xl font-bold pb-3">Contact Me</div>
      <div className="flex justify-between font-medium py-4">
      <span>email</span>
      <span>telephone</span>
      <span>location</span>
      </div>
      <div className="flex justify-center space-x-10 font-medium py-6">
      <span>Whatsapp</span>
      <span>Instagram</span>
      <span>LinkedIn</span>
      <span>github</span>
      </div>
    </div>
  </div>
  );
};

export default PriscillaPage;
