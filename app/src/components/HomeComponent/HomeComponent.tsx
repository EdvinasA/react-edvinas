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
            <div className='body-image'><img src={require('./main-picture-smaller.png')} alt='main'/></div>
          </div>
          <div>
            <div className='body-services-title'>My Services</div>
            <div className='body-services-points'>
              <div className='body-services-point'>Creating simple websites by provided designs or even help with creating the designs.</div>
              <div className='body-services-point'>Helping create complex websites or applications which require complex logic and needs implementation of server to store data.</div>
              <div className='body-services-point'>I Work with these technologies:
                <div className='icon-images'>
                <img src={require('./aws-icon.jpg')} alt='AWS'/>
                <img src={require('./c-sharp-icon.png')} alt='C#'/>
                <img src={require('./java-icon.png')} alt='JAVA'/>
                <img src={require('./javascript-icon.png')} alt='Typescript'/>
                <img src={require('./typescript-icon.png')} alt='Javascript'/>
                </div>
              </div>
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
            <div className='contact-wrapper-home'>
              <div>Got a Project?</div>
              <div>Lets Talk!</div>
            </div>
          </div>
        </div>
        </body>
      </div>
  );
}

export default HomeComponent;
