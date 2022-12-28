import React, {FC} from 'react';
import './AboutComponent.scss';

interface AboutComponentProps {
}

const AboutComponent = () => {
  return (
      <div className='about'>
        <div>
          <div className='about-header'>About Me</div>
          <div className='about-header-description'>I have had the great fortune of working on some truly inspiring projects
            while networking with many influential and creative individuals along the way.
            I believe in the power of
            working together to create a whole that is greater than the sum of its parts.
          </div>
        </div>
        <div className='about-contact-wrapper'>
          <a className='about-contact-button' href="mailto:edvinasalimas98@gmail.com">Contact</a>
        </div>
        <div>
          <div>Picture</div>
          <div className='about-description-title'>Professional History</div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Assistant Coordinator</div>
            <div className='experience-date'>November 2009 - January 2011</div>
            <div className='experience-description'>This is a concise description of your previous work experience and the
              responsibilities you had. The most effective Portfolios give a clear snapshot of where you’re.</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Assistant Coordinator</div>
            <div className='experience-date'>November 2009 - January 2011</div>
            <div className='experience-description'>This is a concise description of your previous work experience and the
              responsibilities you had. The most effective Portfolios give a clear snapshot of where you’re.</div>
          </div>
          <div className='experience-wrapper'>
            <div className='experience-title'>Assistant Coordinator</div>
            <div className='experience-date'>November 2009 - January 2011</div>
            <div className='experience-description'>This is a concise description of your previous work experience and the
              responsibilities you had. The most effective Portfolios give a clear snapshot of where you’re.</div>
          </div>
        </div>
      </div>
  );
}

export default AboutComponent;
