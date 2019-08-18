import React from 'react';
import logo from './logo.svg';
import Student from './components/Student';
import StudentForm from './components/StudentForm';
import Table from './components/TableS'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="modal-body row">
      <div className="col-md-6">
      <StudentForm/>  </div>
     <div className="col-md-6">
     <Student/>
     </div>
     </div>

     {/* <Table/> */}
    </div>
  );
}

export default App;
