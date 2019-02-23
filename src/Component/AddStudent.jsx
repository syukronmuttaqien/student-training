import React, { Component } from 'react';

import { Form, Button, Input, InputNumber } from 'antd';

import { Consumer } from '../Context';
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
     }

  }

  handleSubmit = (e, dispatch) => {
    const { onAdd } = this.props;
    e.preventDefault();
    console.log({e});
    this.props.form.validateFields((err, values) => {
      console.log({err});
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.state);
        dispatch({type: 'ADD_STUDENT', payload: this.state});
        onAdd();
        this.setState({name: '', email: '', phone: ''});
      }
    });
  }

  render() { 
    return (  
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { getFieldDecorator } = this.props.form;
          return (
            <div>
              <Form onSubmit={(e) => this.handleSubmit(e, dispatch)} className="add-form">
                <Form.Item>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!', setFieldsValue: this.state.name}],
                  })(
                    <Input placeholder="Name" onChange={event => this.setState({name: event.target.value})} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!', setFieldsValue: this.state.email}],
                  })(
                    <Input placeholder="Email" onChange={event => this.setState({email: event.target.value})} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone!', setFieldsValue: this.state.phone}],
                  })(
                    <Input placeholder="Phone" onChange={event => this.setState({phone: event.target.value})} />
                  )}
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="add-form-button">Simpan</Button>
                </Form.Item>
                
              </Form>

              
            </div>
          );
        }}
      </Consumer>
    );
  }
}

const AddStudentForm = Form.create({ name: 'add_student' })(AddStudent);
 
export default AddStudentForm;