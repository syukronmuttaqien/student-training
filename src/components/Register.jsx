import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};  
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        const ex_link = 'https://cors-anywhere.herokuapp.com/';
        try{
          const response = await axios.post(`${ex_link}https://node-student.herokuapp.com/api/student/signup`, values);
          console.log({response});
          this.props.form.resetFields();
          alert('Insert Success');
          this.props.history.push('/');
        } catch (error) {
          alert('Something Went Wrong');
          console.log({error});
        }
      }
    });
  }

  render() { 
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
      <div className="container">

        <h3>Register</h3>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your Name!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Name" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('handphone', {
              rules: [{ required: true, message: 'Please input your Handphone!' }],
            })(
              <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Handphone" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'Please input your Address!' }],
            })(
              <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Address" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
      </React.Fragment>
    );
  }
}

const WrappedRegister = Form.create({ name: 'register' })(Register);
 
export default connect(null)(WrappedRegister);
