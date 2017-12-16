import React, { Component } from 'react';
import './App.css';
import Title from './Title';


class App extends Component {
   myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

active(n){
  let x = document.getElementsByTagName("a")
  console.log(x,n)
  // x.forEach((a)=>{
  //   console.log(a)
  // })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#portfolio" onClick={()=>this.active(1)}>Portfolio</a>
            <a href="#resume">Resume</a>
            <a href="#about">About</a>
            <a href="#drawings">Drawings</a>
            <a href="javascript:void(0);" className="icon" onClick={()=>this.myFunction()}>&#9776;</a>
          </div>
                </header>
                <Title />
      </div>
    );
  }
}

export default App;
