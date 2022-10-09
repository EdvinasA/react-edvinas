import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import './App.scss';
import MyComponent from './components/MyComponent/MyComponent';

class App extends React.Component {
  state = {
    show: false
  }

  setStateShow() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.show = !this.state.show;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-box">
            <div><MyComponent></MyComponent></div>
            <div className="App-contact-button-wrapper">
              <div className="wrapper">
                <a href="/" className="App-button"><span>CONTACT</span></a>
              </div>
            </div>
          </div>
        </header>
        <body>
          <Controller>
            <Scene duration={50} pin={true}>
              <div className="App-body">
                <div>
                  Full-Stack
                </div>
                <div>
                  Software Engineer
                </div>
                <div className="App-second-description">
                  I'm Edvinas Alimas, a software engineer -
                  I work to create solutions that will help you to be ready for the future.
                </div>
              </div>
            </Scene>
          </Controller>
        </body>
        <footer className="App-footer">
          <div className="App-footer-first-header">
            Looking for a Full-Stack Software Engineer?
          </div>
          <div>
            <div>

            </div>
            <div className="App-footer-get-in-touch">
              <div className="App-contact-button-wrapper">
                <div className="wrapper">
                  <a href="/" className="App-button"><span>EMAIL</span></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
