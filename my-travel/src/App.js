import React, { Component } from "react";
import logo from "./earth.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <div className="box">
        <Travel
          country="Nicaragua"
          destination="Popoyo"
          distance="8500 km"
          photo="https://robbreportedit.files.wordpress.com/2015/08/mukul-resort-nicaragua-011.jpg?w=1000"
        />
        
        <Travel
          country="Guatemala"
          destination="El Paredon"
          distance="7900 km"
          photo="https://www.guatemala.com/fotos/201703/Playa-El-Paredon-885x500.jpg"
        />
        </div>
      </div>
    );
  }
}

export default App;
