import React from 'react';
import { animated, config, Transition } from 'react-spring';
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
          <div>
        
          </div>
        </body>
      </div>
    );
  }
}

export default App;
