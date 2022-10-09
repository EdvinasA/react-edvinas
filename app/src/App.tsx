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
                <a href="#" className="App-button"><span>Contact</span></a>
              </div>
            </div>
          </div>
        </header>
        <body className="App-body">
          <Controller>
            <Scene duration={900} pin>
              <div>
                <div>
                  Full-Stack Software Engineer
                </div>
                <div className="App-second-description">
                  I'm Edvinas Alimas, a software engineer -
                  I work to create solutions that will help you to be ready for the future.
                </div>
              </div>
            </Scene>
          </Controller>
        </body>
      </div>
    );
  }
}

export default App;
