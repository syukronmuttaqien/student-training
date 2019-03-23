import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../../components/layout/TextInputGroup';
import { Row, Col } from 'antd';
import uuid from 'uuid';
import axios from 'axios';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { name, email, phone, errors } = this.state;
        if (name === '') {
            this.setState({ errors: { name: 'Name is Required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is Required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is Required' } })
            return;
        }
        const newStudent = {
            name,
            email,
            phone,
            errors,
        }

        axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, newStudent)
        .then((res) => {

            const newStudentParam = {
              id: this.state.id,
              name,
              email,
              phone,
            }

            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: ''
            })

            // redirect to home
            this.props.history.push('/');
        })
        
        
    }

    componentDidMount() {
      this.getParams();
    }

    getParams() {
      const { match } = this.props;
      this.setState({
        id: match.params.id
      });

      axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`).then((res) => {
        const { data } = res;
        console.log({data});
        this.setState({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      }).catch(error => console.log({error}))
    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
                        <React.Fragment>
                            <div style={{ width: '30%' }}>
                                <Row type="flex" align="middle">
                                    <div>Edit Form</div>
                                </Row>
                                <form onSubmit={this.onSubmit.bind(this)}>
                                    <TextInputGroup label='Name' name="name" type="text" placeholder="Enter name" value={name} onChange={this.onChange} error={errors.name} />
                                    <TextInputGroup label='Email' name="email" type="text" placeholder="Enter email" value={email} onChange={this.onChange} error={errors.email} />
                                    <TextInputGroup label='Phone' name="phone" type="text" placeholder="Enter phone number" value={phone} onChange={this.onChange} error={errors.phone} />
                                    <Row type="flex" justify="end">
                                        <input type="submit" value="submit" />
                                    </Row>
                                </form>
                            </div>
                        </React.Fragment>
                )
    }
}

export default EditStudent;