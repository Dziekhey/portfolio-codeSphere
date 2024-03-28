/* eslint-disable react/prop-types */
import React from "react";
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {

  return (
    <div className="">
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={experience.start_date}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=''
  >
    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{experience.organisation}</h4>
    <p>
      {experience.description}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={experience.start_date}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon=''
  >
    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{experience.organisation}</h4>
    <p>
      {experience.description}
    </p>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
  );
};

export default ExperienceCard;
