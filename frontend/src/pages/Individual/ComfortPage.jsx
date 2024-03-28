import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Compic from "../../assets/Compic.jpg";
import ImgCard from "../../components/ImgCard.jsx";
import "./individual.css";
import { apiGetUserSkills} from "../../services/skills.services.js";
import SkillCard from "../../components/SkillCard.jsx";
import Experiences from '../../components/Experiences.jsx'

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

  const SkillData = [
    {
      skill: "Javascript",
      proficiency: "20%",
    },
    {
      skill: "CSS",
      proficiency: "80%",
    },
    {
      skill: "bootsrap",
      proficiency: "10%",
    },
    {
      skill: "React",
      proficiency: "50%",
    },
  ];

  const [comfirstskills, setComfirstskills] = useState([]);
  const [comsecondskills, setComsecondskills] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (Comfort) => {
    try {
      setLoading(true);
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
       

      
  
      setComfirstskills(firstdata);
      setComsecondskills(seconddata);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="bg">
      {/* About division */}
      <div className="flex justify-center items-center">
        <h1 className="text-7xl font-extrabold py-6">ABOUT COMFORT</h1>
      </div>
      <div className="flex flex-row">
        <div className="shrink-0 w-96">
          <ImgCard Image={Compic} />
        </div>
        <motion.div
  animate={{ x: [0, 100, 0] }}
>
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
        </motion.div>
      </div>

      {/* Skills division */}
      <div className="p-8">
        <h1 className="text-5xl font-medium pt-8">Skills</h1>
        <div className="w-full flex lgl:flex-row gap-10 lgl:gap-20">
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
            {
            comfirstskills.length>0 && comfirstskills.map((data) => (<SkillCard key={data._id} skills={data}/>))
            }
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
            {
              comsecondskills.length>0 && comsecondskills.map((data) => (<SkillCard key={data._id} skills={data}/>))
            }
            </div>
          </div>
        </div>
      </div>
    
      {/* Experience division */}
      <Experiences experiences={ExperiencesData} />

      {/* Contact division*/}
      <div className="p-8 border-t-4 border-black">
        <div className="text-4xl font-bold pb-3">Contact Me</div>
        <div className="flex justify-center space-x-10 font-medium py-4">
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="mail-outline"></ion-icon>comfortearthur69@gmail.com</span>
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="call-outline"></ion-icon>+233209062712</span>
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="location-outline"></ion-icon>East Legon, Ghana</span>
        </div>
        <div className="flex justify-center space-x-10 font-medium py-6">
          <a href="https://wa.me/+233501376212" className='hover:scale-105 cursor-pointer'><span size="small"><ion-icon name="logo-whatsapp"></ion-icon></span></a>
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="logo-instagram"></ion-icon></span>
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="logo-linkedin"></ion-icon></span>
          <span size="small" className='hover:scale-105 cursor-pointer'><ion-icon name="logo-github"></ion-icon></span>
        </div>
      </div>
    </div>
  );
};

export default ComfortPage;
