import React, { Component } from 'react';
import './App.css';
import Title from './Title';


class App extends Component {
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onClick={()=>this.myFunction()}>&#9776;</a>
          </div>
                </header>
                <Title />
      </div>
    );
  }
}

export default App;
