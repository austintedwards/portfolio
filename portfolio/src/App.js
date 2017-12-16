import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <input type="checkbox" id="nav" class="hidden"/>
            <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
            <div class="nav-container">
              <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
                </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
