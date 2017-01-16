import React from "react";
 import Timer from './Timer';
 import TimerForm from './TimerForm';

export default class TimerList extends React.Component {
  constructor() {
    super();
    this.name = "Mike";
    this.state = {
      clicks: 0
    };

  }


  render() {
    return (
      <div>
      <Timer />
      <TimerForm />
      </div>
    );
  }
} 
