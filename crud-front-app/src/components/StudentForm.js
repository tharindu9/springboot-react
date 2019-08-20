import React , {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class StudentForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : "",
            year : 0,
            age : 0,
            city : ""
        }

        this.handelChange = this.handelChange.bind(this);
        this.addStudent = this.addStudent.bind(this)
    }

    handelChange(e){
     this.setState ({
        [e.target.name] : [e.target.value]
     })
    }

    addStudent(){
        console.log("click submit")
        const oldState = this.state;
        this.props.addData()
        this.state = oldState;
    }
    
    render(){
    
    return(
     <div>
    <h6 >
    
    <b>Enter Student detail</b>
    
    </h6>
    <div className="StudentDetailForm">

    <TextField
        id="name"
        label="Name"
        name = "name"
        fullWidth
        value={this.state.name}
        style={{ margin: 8 }}
        onChange = {this.handelChange}
        className = "inputField"
      />
      <br/>

<FormControl fullWidth>
 <InputLabel>Year</InputLabel>
  <Select
          label="year"
          value={this.state.year}
          onChange={this.handelChange}
          fullWidth
          inputProps={{
            name: 'year',
            id: 'year-simple',
          }}
        >
          <MenuItem value={1}>First year</MenuItem>
          <MenuItem value={2}>Second year</MenuItem>
          <MenuItem value={3}>Thrid year</MenuItem>
          <MenuItem value={4}>Fourth year</MenuItem>
  </Select>

    
  </FormControl>
   
    
      <br/>
         <TextField
        id="city"
        label="City"
        name = "city"
        fullWidth
        style={{ margin: 8 }}
        value={this.state.city}
        onChange = {this.handelChange}
        className = "inputField"
      />
        <br/>
         <TextField
        id="age"
        label="Age"
        name = "age"
        fullWidth
        type = "number"
        style={{ margin: 8 }}
        value={this.state.age}
        onChange = {this.handelChange}
        className = "inputField"
      />

        </div>
        <Button variant="contained" color="primary" className="submitButton" onClick={this.addStudent}>
        Submit
      </Button>
     </div>
        )
    }
}

export default StudentForm;