import React, { Component } from 'react';
import Align from "./align";
import Toggle from "./toggle";
import UpDown from "./up-down";
import IncreaseDecrease from "./increase-decrease";
import Color from "./color";
import Clock from "./clock";


export default class App extends Component { 
  render() {

    return (
      <div className='app'>
       <Align text="Align Me!"/>
       <Toggle text="Hide Me!"/>
       <UpDown />
       <IncreaseDecrease />
       <Color />
       <Clock />
      </div>
    );
  }
}



