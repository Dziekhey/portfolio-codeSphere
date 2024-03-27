import React from 'react'
import { Col } from 'react-bootstrap';
import './ProjectCard.css';



const ProjectCard = ({ title, description, imgUrl, github, webicon }) => {
    return (


        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img className='w-full h-[400px]' src={imgUrl} />
                <div className='proj-txtx'>
                    <h4> {title} </h4>
                    <span> {description} </span> <br /> <br />  <br />

                    <div id='card-icons' className='flex mx-64 gap-5'>

                        <div className='icon'>
                            <a className="icons" href={"https://hudams.net/"} target="_blank" rel="noopener noreferrer">

                                <img src={webicon} alt="" className='h-8 w-8 ' />

                            </a>
                        </div>

                       <div className='iconic'>
                       <a className="icons" href={github} target="_blank" rel="noopener noreferrer"
                        >
                            <img src={github} alt="" className='h-9 ' />
                        </a>
 
                       </div>
                    </div>










                </div>

            </div>
        </Col>

    )
}

export default ProjectCard