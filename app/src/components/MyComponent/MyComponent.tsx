import React from 'react';
import { Transition, config, animated } from 'react-spring';
import './MyComponent.scss';

class MyComponent extends React.Component {

  state = {
    show: true
  }
  
  setStateShow() {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.show = !this.state.show;
  }

  render() {
    return (
      <Transition
        items={this.state.show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        reverse={this.state.show}
        delay={500}
        config={config.molasses}
        onRest={() => this.setStateShow()}>
        {(styles, item) =>
          item && <animated.div style={styles}>
            Edvinas Alimas
            </animated.div>
        }
      </Transition>
    )
  }

}
export default MyComponent;
