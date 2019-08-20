import React , {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';




import clsx from 'clsx';




class StudentForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name : "",
            male : 0,
            age : 0,
            city : ""
        }

        this.handelChange = this.handelChange.bind(this)
    }

    handelChange(e){
     this.setState ({
        [e.target.name] : [e.target.value]
     })

     
    }

    
    render(){
    
        return(
     <div>
    <h6>
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
      <InputLabel htmlFor="age-helper">Age</InputLabel>
  <Select
          label="Gender"
          value={this.state.male}
          onChange={this.handleChange}
          fullWidth
         
        >
          <MenuItem value={'m'}>Male</MenuItem>
          <MenuItem value={'fm'}>Female</MenuItem>
        </Select>

    

   
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

        </div>
        <Button variant="contained" color="primary" className="submitButton">
        Primary
      </Button>
            </div>
        )
    }
}

export default StudentForm;