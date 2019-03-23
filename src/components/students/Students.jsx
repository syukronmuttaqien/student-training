import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Student from './Student';
import { Row, Layout } from 'antd';
import { Consumer } from '../../context';
import { GET_STUDENTS } from '../../action/type';
import { getStudents, deleteStudent } from '../../action/studentAction';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Januar',
                    email: 'month1@gmail.com',
                    phone: 1010101
                },
                {
                    id: 2,
                    name: 'Febri',
                    email: 'month2@gmail.com',
                    phone: 2020202
                },
                {
                    id: 3,
                    name: 'Marti',
                    email: 'month3@gmail.com',
                    phone: 3030303
                },
                {
                    id: 4,
                    name: 'April',
                    email: 'month4@gmail.com',
                    phone: 4040404
                },
                {
                    id: 5,
                    name: 'May',
                    email: 'month5@gmail.com',
                    phone: 5050505
                },
                {
                    id: 6,
                    name: 'Juno',
                    email: 'month6@gmail.com',
                    phone: 6060606
                }
            ]
        }
    }
    // deleteCard = (id) => {
    //     console.log(id);
    //     const { students } = Consumer.value;
    //     const newar = students.filter(student => student.id !== id);
    //     this.setState({
    //         students: newar
    //     })
    // }

    componentDidMount() {
        this.props.getStudents();
    }
    render() {
        const { students } = this.props;
        console.log({students});
        return (
            <Layout>
                <Row type="flex" justify="start">
                                <React.Fragment>
                                    {
                                        students.map((data) =>
                                            < Student
                                                key={data.id}
                                                student={data}
                                            // deleteCard={this.deleteCard.bind(this, data.id)}
                                            // name={data.name}
                                            // email={data.email}
                                            // phone={data.phone}
                                            />
                                        )
                                    }
                                </React.Fragment>
                            )

                        }
                </Row>
            </Layout>
            // <React.Fragment>

            // </React.Fragment>
        );
    }
}

Students.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string
}

const mapStateToProps = (state) => ({
    students: state.student.students
});


export default connect(mapStateToProps,{getStudents, deleteStudent})(Students);