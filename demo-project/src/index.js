import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

/**
 * Rendering elements with JSX
 */

// const element = <h1 className="test-class">Hello world!!</h1>

// ReactDOM.render(element, document.getElementById('root'));

// const newElement = <h1 className="test-class">Overriding of elements</h1>

// ReactDOM.render(newElement, document.getElementById('root'));


// const element = (
//   <div>
//     <h1 className="test-class">Hello world!!</h1>
//     <h1 className="test-class">Hello react!!</h1>
//   </div>
// );

// ReactDOM.render(element, document.getElementById('root'));

/**
 * Rendering elements without JSX
 */

 const element = React.createElement("div", {className: "test-class"}, 
  React.createElement("h1", null, "Hello world!!"),
  React.createElement("h1", null, "Hello react!!")
 );

 ReactDOM.render(element, document.getElementById('root'));