import React from 'react';


class CarOne extends React.Component{
  constructor(){
    super()
    this.state = {color : "red"}
  }
  render(){
  return <h2>Hi, I am a {this.state.color} Car1 from App.js!</h2>
  }
}


export default CarOne