import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authLogin } from '../action/authAction';

import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

import './Login.sass';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        const success = await this.props.authLogin(values);

        if(success){ 
          this.props.history.push('/');
        }
      }
    });
  }

  render() { 
    const { getFieldDecorator } = this.props.form;

    return (
      <React.Fragment>
      <div className="container">

        <h3>Login</h3>
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      </React.Fragment>
    );
  }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);
 
export default connect(null, { authLogin })(WrappedLogin);