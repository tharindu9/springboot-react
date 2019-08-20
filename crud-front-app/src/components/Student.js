import React , {Component} from 'react';
import { MDBDataTable } from 'mdbreact';





class Student extends Component {

    render(){
        
            const data = {
              columns: [
                {
                  label: 'Name',
                  field: 'name',
                  sort: 'asc',
                  width: 150
                },
                {
                  label: 'Grade',
                  field: 'grade',
                  sort: 'asc',
                  width: 270
                },
                {
                  label: 'City',
                  field: 'city',
                  sort: 'asc',
                  width: 200
                },
                {
                  label: 'Age',
                  field: 'age',
                  sort: 'asc',
                  width: 100
                },
               
              ],
              rows: [
                {
                  name: 'Tiger Nixon',
                  grade: 'System Architect',
                  city: 'Edinburgh',
                  age: '61',
                },
                {
                  name: 'Garrett Winters',
                  grade: 'Accountant',
                  city: 'Tokyo',
                  age: '63',
                },
                {
                  name: 'Ashton Cox',
                  grade: 'Junior Technical Author',
                  city: 'San Francisco',
                  age: '66',
                }
              ]
            }
        
            

        return(
<div>
<h6>
    <b>Student detail</b>
    
</h6>
<MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </div>
        )
    }
}

export default Student;