import React, { Component } from 'react';
import './App.css';
import iconurl from './icon/love.png'
import tipsurl from './icon/tips.png'
import Main from './Main'
import { appResize as resize } from './resize'

class App extends Component {
  state = {
    class: 'bounceInLeft',
    show: false,
  };

  render() {
    const main = () => {
      if (this.state.show)
        return <Main />
    }
    return (
      <div id="app">
        <div style={resize('envelope')} className={"envelope animated " + this.state.class}>
          <div className="text">
            <img alt='tips' style={resize('tips')}  src={tipsurl} />
          </div>
          <div style={resize('down')} className="triangle-down"></div>
          <img style={resize('heart')} className="heart" alt='mail' src={iconurl} onClick={() => {
            this.setState({ class: 'bounceOutRight', show: true })
          }} />
          <div style={resize('up')} className="triangle-up"></div>
        </div>
        {main()}
      </div>
    );
  }
}

export default App;
