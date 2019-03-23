import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../../components/layout/TextInputGroup';
import { Row, Col } from 'antd';
import uuid from 'uuid';
import axios from 'axios';
import { addStudent } from '../../action/studentAction';
import { connect } from 'react-redux';

class AddStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}
        }
    }
    
    componentWillMount() {
        const { auth, history } = this.props;

        if(!auth.isAuth) {
            history.push('/login');
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
            id: uuid(),
            name,
            email,
            phone,
            errors,
        }

        this.props.addStudent(newStudent);

        // axios.post("https://jsonplaceholder.typicode.com/users", newStudent)
        // .then((res) => {
        //     dispatch({ type: 'ADD_STUDENT', payload: res.data });

        //     this.setState({
        //         name: '',
        //         email: '',
        //         phone: '',
        //         errors: ''
        //     })

        //     // redirect to home
            this.props.history.push('/');
        // })
        
        
    }

    render() {
        const { name, email, phone, errors } = this.state;
                        return <React.Fragment>
                            <div style={{ width: '30%' }}>
                                <Row type="flex" align="middle">
                                    <div>Add Form</div>
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
    }
}

const mapStateToProps = state => ({
    auth: state.auth.auth
});

export default connect(mapStateToProps,{addStudent})(AddStudents);