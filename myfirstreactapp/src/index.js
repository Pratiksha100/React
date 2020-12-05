import React from 'react';
import ReactDOM from 'react-dom';
import CarOne from './App.js'
const myfirstelement = <h1>Hello React!</h1>



function CarTwo(){
  const colorName = "white"
  return <h2>Hi, I am Car2! And This is data from other cars: <CarOne></CarOne> <CarThree color={colorName}></CarThree></h2>
}

class CarThree extends React.Component{
  render(){
  return <h2>Hi, I am a {this.props.color} Car3!</h2>
  }
}

ReactDOM.render(myfirstelement, document.getElementById('root'))
ReactDOM.render(<CarOne />, document.getElementById('car1'))
ReactDOM.render(<CarTwo />, document.getElementById('car2'))
ReactDOM.render(<CarThree color="blue" />, document.getElementById('car3'))
