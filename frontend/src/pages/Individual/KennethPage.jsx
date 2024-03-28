import Kenpic from "../../assets/Kenpic.jpg";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImgCard from "../../components/ImgCard.jsx";
import "./individual.css";
import { apiGetUserSkills } from "../../services/skills.services.js";
import SkillCard from "../../components/SkillCard.jsx";
import Experiences from "../../components/Experiences.jsx";
import { apiGetUserExperiences } from "../../services/experiences.services.js";

const KennethPage = () => {
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

  const [kenfirstskills, setKenfirstskills] = useState([]);
  const [kensecondskills, setKensecondskills] = useState([]);
  const [comexperience, setComexperience] = useState([]);
  

  const fetchData = async () => {
    try {
      const firstskills = await apiGetUserSkills("Kenneth");
      // console.log(skills.data);
      const firstdata = firstskills.data.filter(
        (res) => res?.type === "Programming Languages and Libraries"
      );

      const secondskills = await apiGetUserSkills("Kenneth");
      // console.log(secondskills.data);
      const seconddata = secondskills.data.filter(
        (res) => res?.type === "Software Proficiency and Frameworks"
      );

      const experiences = await apiGetUserExperiences('Comfort')
      const data = experiences.data
      

      setKenfirstskills(firstdata);
      setKensecondskills(seconddata);
      setComexperience(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="bg" >
      <div className="mx-20">
      {/* About division */}
      <div className="flex justify-center items-center"></div>
      <div className="flex flex-row">
        <div className="shrink-0 w-96">
          <ImgCard Image={Kenpic} />
        </div>
        <motion.div animate={{ x: [0, 100, 0] }}>
          <div className="shrink w-120 text-justify">
            <div className=" "> 
              <h1 className="text-7xl font-extrabold py-6">ABOUT ME</h1>
            </div>
            <p className="py-20 ">
              Hello! I'm Kenneth, a passionate and adaptable professional with a
              love for creativity and problem-solving. My expertise spans
              graphic design and web development, allowing me to thrive in
              dynamic work environments. I'm dedicated to delivering excellence
              in every project I undertake, whether it's crafting captivating
              visual identities or coding sleek and functional websites.
              Collaboration is key to my approach, and I excel at communicating
              and working alongside teams. With a keen eye for detail and a
              hunger for innovation, I'm constantly seeking new challenges to
              expand my skills in the ever-evolving realms of design and
              technology.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Skills division */}
      <div className="p-8">
        <h1 className="text-5xl font-medium pt-8">Skills</h1>
        <div className="w-full mx-24 flex lgl:flex-row gap-10 lgl:gap-20">
          <div className="w-1/2 lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px] uppercase">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Programming Languages and Libraries
              </h2>
            </div>
            <div className="w-full lgl:w-1/2">
              {kenfirstskills.length > 0 &&
                kenfirstskills.map((data) => (
                  <SkillCard key={data._id} skills={data} />
                ))}
            </div>
          </div>
          <div className="w-1/2 lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <p className="text-sm text-designColor tracking-[4px] uppercase">
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Software Proficiency and Frameworks
              </h2>
            </div>
            <div className="w-full lgl:w-1/2">
              {kensecondskills.length > 0 &&
                kensecondskills.map((data) => (
                  <SkillCard key={data._id} skills={data} />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience division */}
      <Experiences experiences={comexperience} />

      {/* Contact division*/}
      <div className="p-8 border-t-4 border-black">
        <div className="text-4xl font-bold pb-3">Contact Me</div>
        <div className="flex justify-center space-x-10 font-medium py-4">
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="mail-outline"></ion-icon>antwikenneth14@gmail.com
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="call-outline"></ion-icon>+23350137612
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="location-outline"></ion-icon>Spintex, Ghana
          </span>
        </div>
        <div className="flex justify-center space-x-10 font-medium py-6">
          <a
            href="https://wa.me/+233501376212"
            className="hover:scale-105 cursor-pointer"
          >
            <span size="small">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </span>
          </a>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="logo-github"></ion-icon>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default KennethPage;
