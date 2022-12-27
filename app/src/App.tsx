import React from 'react';
import './App.scss';
import {Menu} from '@mui/icons-material';
import {Divider} from "@mui/material";

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <div className='header'>
              <div>Edvinas Alimas</div>
              <div className='header-icon'><Menu/></div>
            </div>
            <Divider style={{borderColor: 'white', borderBottomWidth: 'medium'}} className='header-divider'/>
          </header>
          <body>
          <div className='body'>
            <div className='body-image-wrapper'>
              <img className='body-image' src={require('./assets/main-picture.jpg')} alt='a'/>
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
          <footer className="App-footer">
            <div>©2022 by Edvinas Alimas</div>
          </footer>
        </div>
    );
  }
}

export default App;
