import { Col, Row, TabContainer, TabContent, TabPane, Nav, Container, Tab } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard";
import projImg1 from "../../assets/images/projImg1.avif";
import projImg2 from "../../assets/images/projImg2.avif";
import projImg3 from "../../assets/images/projImg3.avif";
import projImg4 from "../../assets/images/projImg4.avif";
import "../projects/projects.css"



import React from 'react'

export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12} className="wow fadeIn">
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                               
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent id="wow slideInUp">
                                <TabPane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard
                                            key={`${project.title}-${index}`}
                                                title={project.title}
                                                description={project.description}
                                                imgUrl={project.imgUrl}
                                            />
                                        ))}
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="section">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}