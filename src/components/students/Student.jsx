import React, { Component } from 'react';
import { Card, List, Icon } from 'antd';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteStudent } from '../../action/studentAction';
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showtoggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    deleteData = async (id) => {
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {

        // })
        // .catch(error => console.log({error}))
        this.props.deleteStudent(id);
    }

    render() {
        const { student } = this.props
        const { visible } = this.state
        const Li = List.Item
        return (
                        <React.Fragment>
                            <div style={{ width: '25%' }}>
                                <Card bordered style={{ margin: '30px', background: 'aliceblue', borderRadius: '10px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h1 style={{ margin: 0 }}>
                                            {student.name}
                                            <Icon type="down" style={{ fontSize: "16px" }} onClick={this.showtoggle} />
                                            <Link to={`student/edit/${student.id}`}>
                                                <Icon type="edit" style={{ fontSize: "16px" }} />
                                            </Link>
                                        </h1>
                                        <Icon type="cross" style={{ fontSize: "16px", color: 'red' }} onClick={this.deleteData.bind(this, student.id)} />
                                    </div>
                                    {visible === true ?
                                        <List>
                                            <Li>{student.email}</Li>
                                            <Li>{student.phone}</Li>
                                        </List>
                                        :
                                        null
                                    }
                                </Card>
                            </div>
                        </React.Fragment>
                    )
    }
}

export default connect(null,{deleteStudent})(Student);