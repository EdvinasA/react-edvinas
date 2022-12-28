import React from 'react';
import './HomeComponent.scss';
interface HomeComponentProps {
}

const HomeComponent = (props: HomeComponentProps) => {
  return (
      <div className="HomeComponent">
        <body>
        <div className='body'>
          <div className='body-image-wrapper'>
            <div className='body-image'></div>
          </div>
          <div>
            <div className='body-services-title'>My Services</div>
            <div className='body-services-points'>
              <div className='body-services-point'>This is a concise description of your previous work experience and the responsibilities you had.</div>
              <div className='body-services-point'>This is a concise description of your previous work experience and the responsibilities you had.</div>
              <div className='body-services-point'>This is a concise description of your previous work experience and the responsibilities you had.</div>
            </div>
          </div>
          <div className='body-quote'>
            <div className='body-quote-wrapper'>
              <div className='quote-text'>
                "I don’t stop when I’m tired. I stop when I’m done."
              </div>
              <div>David Goggins</div>
            </div>
          </div>
          <div>
            <div className='contact-wrapper'>
              <div>Got a Project?</div>
              <div>Lets Talk!</div>
            </div>
            <div className='email-wrapper'>edvinasalimas98@gmail.com</div>
          </div>
        </div>
        </body>
      </div>
  );
}

export default HomeComponent;
