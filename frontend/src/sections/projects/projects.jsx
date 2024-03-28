import { Col, Row, TabContainer, TabContent, TabPane, Nav, Container, Tab } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";
import projImg1 from "../../assets/images/projImg1.avif";
import projImg2 from "../../assets/images/projImg2.avif";
import projImg3 from "../../assets/images/projImg3.avif";
import projImg4 from "../../assets/images/projImg4.avif";
import githubIcon from "../../assets/images/githubicon.svg";
import webicon from "../../assets/images/webicon.png";
import "../projects/projects.css"
import React from 'react'
import TrackVisibility from 'react-on-screen';


export default function Projects  (){

    const projects = [
        {
            title: "HUDAMS Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            github:githubIcon,
            webicon: webicon,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            github:githubIcon,
            webicon: webicon,
        },
        {
            title: "Agro E-Commerce Market",
            description: "A one-stop shop for all your farm produce.",
            imgUrl: projImg3,
            github:githubIcon,
            webicon: webicon,
        },
        {
            title: "Cinemate Movie App",
            description: "CINEMATE is a family-friendly streaming website that provides over 30,000 independent movies and documentaries for free for its users.",
            imgUrl: projImg4,
            github:githubIcon,
            webicon: webicon,
        },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg2,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
    ];

    return (
        <section className="project p-20" id="projects">
            <Container>

                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Projects</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="grid grid-cols-2 gap-12">
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={`${project.title}-${index}`}
                                                title={project.title}
                                                description={project.description}
                                                imgUrl={project.imgUrl}
                                                github={project.github}
                                                webicon={project.webicon}

                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>}
                </TrackVisibility>

            </Container>
            {/* <img className="background-image-right" src={'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}></img> */}
        </section>
    )
}