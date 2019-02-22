import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import { Consumer } from '../Context';

class Students extends Component {

  

  render() { 
    return (
    <Consumer>
    {value => {
      const { students } = value; // Destructuring
      return students.map((student, index) => 
        <Student
          index = {index}
          key = {student.id}
          student = {student}
        />
      )
      }
    }
    </Consumer>
    )
  }}

Students.propTypes = {
  // student: PropTypes.object.isRequired,
}
 
export default Students;