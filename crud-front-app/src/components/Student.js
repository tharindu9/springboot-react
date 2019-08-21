import React , {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { number } from 'prop-types';


class Student extends Component {

constructor(props){
  super(props)
  this.state = {
 
    
  }
}

componentWillMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json=>{
    console.log(json);
  })
}






 render(){ 
  var rows = [
    {name:'Tharindu Ariyarathna', city :"Kurunegala", year:2, age:24},
    {name:'Hashan rathnayeka', city :"matara", year:3, age:24},
    {name:'Ishan chathura', city :"matara", year:4, age:27},
    

    
  ]
  return(
      <div>
<h6>
    <b>Student detail</b>
    
</h6>

      <Table >
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Age</TableCell>
           
            <TableCell align="right">delete</TableCell>
            <TableCell align="right">edit</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.year}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">delete</TableCell>
              <TableCell align="right">edit</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
   

    </div>
        )
    }
}

export default Student;

