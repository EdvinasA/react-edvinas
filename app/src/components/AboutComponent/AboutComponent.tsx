import React, {FC} from 'react';
import './AboutComponent.scss';

interface AboutComponentProps {
}

const AboutComponent = () => {
  return (
      <div className='about'>
        <div>
          <div className='about-header'>About Me</div>
          <div className='about-header-description'>
            I have had the great fortune of working on some great projects
            while working as a software developer for company Cognizant.
            I believe in order to create something that can help others requires good skills and even greater help from others.
          </div>
        </div>
        <div className='about-contact-wrapper'>
          <a className='about-contact-button' href="mailto:edvinasalimas98@gmail.com">Contact</a>
        </div>
        <div>
          <div>Picture</div>
          <div className='about-description-title'>Professional History</div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Freelance developer</div>
            <div className='experience-date'>December 2020 - June 2021</div>
            <div className='experience-description'>This part of my was learning basic of software development.</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Software Development Academy student</div>
            <div className='experience-date'>June 2021 - October 2021</div>
            <div className='experience-description'>In this academy I managed to strengthen my basic and increase understanding of programming
            basic and learn more advanced programming concepts</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Sourcery Academy of JAVA by Cognizant student</div>
            <div className='experience-date'>October 2021 - December 2021</div>
            <div className='experience-description'>In this academy I had an opportunity to work with real project and show off my skills learned previously
            which helped get the job easily.</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Cognizant Full-Stack Software Developer</div>
            <div className='experience-date'>February 2022 - Now</div>
            <div className='experience-description'>In this company I'v been working since and managed succesfully apply and learn more technologies and become even better developer.
            Currently in this company I'v worked with Javascript (React, Typescript, Angular, NxJS), Java, SQL, Amazon AWS, Microsoft Azure.</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Cognizant Mentor</div>
            <div className='experience-date'>December 2022 - Now</div>
            <div className='experience-description'>Helping creating tests for sourcery academy by cognizant having a team of students that want to join the company.
              Guiding the team in working on a real life project advising on how to manage the work.
              </div>
          </div>
        </div>
      </div>
  );
}

export default AboutComponent;
