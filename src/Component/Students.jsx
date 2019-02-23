import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Student from './Student';
import { Consumer } from '../Context';

import { Modal, Button } from 'antd';


import AddStudent from './AddStudent';
import Dropdown from './Dummy';
import Dummy from './Dummy';

class Students extends Component {
  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
    }
  }

  onClickAdd = () => {
    const { modalVisible } = this.state;
    this.setState({modalVisible: !modalVisible});
  }
  

  render() { 
    return (
    <Consumer>
    {value => {
      const { students } = value; // Destructuring

      console.log({ students });
      return (
      <div> {students.map((student, index) => 
        <Student
          index = {index}
          key = {student.id}
          student = {student}
        />
      )}
        <Modal
          onCancel={this.onClickAdd}
          title="Add Student"
          visible={this.state.modalVisible}
          footer={null}>
          
            <AddStudent onAdd={this.onClickAdd} />
        </Modal>

        <div style={{background: '#ECECEC', padding:'16px'}}>
          <Button onClick={this.onClickAdd}>Add Siswa</Button>
          <center>
          <Dummy />
          </center>
        </div>
      </div>
      )}}
      
      
    
    </Consumer>
    )
  }}

Students.propTypes = {
  // student: PropTypes.object.isRequired,
}
 
export default Students;