import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImgCard from "../../components/ImgCard.jsx";
import "./individual.css";
import { apiGetUserSkills } from "../../services/skills.services.js";
import SkillCard from "../../components/SkillCard.jsx";
import Experiences from "../../components/Experiences.jsx";
import { apiGetUserExperiences } from "../../services/experiences.services.js";
import Compic from '../../assets/Compic.jpg'

const ComfortPage = () => {
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

  const [comfirstskills, setComfirstskills] = useState([]);
  const [comsecondskills, setComsecondskills] = useState([]);
  const [comexperience, setComexperience] = useState([]);
  

  const fetchData = async () => {
    try {
      const firstskills = await apiGetUserSkills("Comfort");
      // console.log(skills.data);
      const firstdata = firstskills.data.filter(
        (res) => res?.type === "Programming Languages and Libraries"
      );

      const secondskills = await apiGetUserSkills("Comfort");
      // console.log(secondskills.data);
      const seconddata = secondskills.data.filter(
        (res) => res?.type === "Software Proficiency and Frameworks"
      );

      const experiences = await apiGetUserExperiences('Comfort')
      const data = experiences.data
      

      setComfirstskills(firstdata);
      setComsecondskills(seconddata);
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
          <ImgCard Image={Compic} />
        </div>
        <motion.div animate={{ x: [0, 100, 0] }}>
          <div className="shrink w-120 text-justify">
            <div className=" "> 
              <h1 className="text-7xl font-extrabold py-6">ABOUT ME</h1>
            </div>
            <p className="py-20 ">
              Hello! I'm Comfort, a skilled web developer driven by a passion for creating intuitive and impactful digital experiences. With a strong foundation in coding languages such as HTML, CSS, and JavaScript, I specialize in crafting responsive and user-friendly websites that exceed client expectations. My attention to detail ensures pixel-perfect designs, while my problem-solving abilities allow me to navigate complex challenges with ease. As a collaborative team member, I thrive in environments where creativity and innovation are valued. I am constantly honing my skills and staying abreast of the latest trends and technologies to deliver cutting-edge solutions that leave a lasting impression.
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
              {comfirstskills.length > 0 &&
                comfirstskills.map((data) => (
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
              {comsecondskills.length > 0 &&
                comsecondskills.map((data) => (
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
            <ion-icon name="mail-outline"></ion-icon>comfortearthur69@gmail.com
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="call-outline"></ion-icon>+233209062712
          </span>
          <span size="small" className="hover:scale-105 cursor-pointer">
            <ion-icon name="location-outline"></ion-icon>East Legon, Ghana
          </span>
        </div>
        <div className="flex justify-center space-x-10 font-medium py-6">
          <a
            href="https://wa.me/+233209062712"
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

export default ComfortPage;
