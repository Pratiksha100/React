import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * function component
 */

var DisplayEmployeeInfo = (employee) =>{
  return <div>
    <h1>Employee Details..</h1>
    <p>
      <label>Emloyee Id: <b>{employee.id}</b></label>
    </p>
    <p>
      <label>Emloyee Name: <b>{employee.name}</b></label>
    </p>
    <p>
      <label>Emloyee Location: <b>{employee.location}</b></label>
    </p>
    <p>
      <label>Emloyee Salary: <b>{employee.salary}</b></label>
    </p>
    <Department deptname={employee.deptname} headname={employee.headname}></Department>
  </div>;
}

var Department = (deptInfo) => {
  return <div>
    <p>Department name is <b>{deptInfo.deptname}</b></p>
    <p>Department head is <b>{deptInfo.headname}</b></p>
  </div>
}


const element = <DisplayEmployeeInfo id="101" name="Pratiksha" location="Manali" salary="10L" deptname="AI" headname="Elon Musk"></DisplayEmployeeInfo>

ReactDOM.render(element, document.getElementById("root"))