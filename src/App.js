import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: false
    };
    this.state = {
      change: false
    }
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
    // this.setState({});
  };

  render() {
    const working = this.state.working ? 'Homer Travaille' : 'Homer est en pause';
    const rest = this.state.working? 'App-logo' : 'App-anim';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={rest} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>

        <Lamp on />
        <Lamp />

        <button onClick={this.handleClick} className={working}> {working} </button>

        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes />
      </div>
    );
  }
}

export default App;
