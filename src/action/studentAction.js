import { GET_STUDENTS, DELETE_STUDENTS, ADD_STUDENTS } from './type';
import axios from 'axios';

export const getStudents = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_STUDENTS,
    payload: res.data
  })
}

export const deleteStudent = (id) => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return {
    type: DELETE_STUDENTS,
    payload: id
  }
}

export const addStudent = (payload) => async dispatch => {
  await axios.post(`https://jsonplaceholder.typicode.com/users`, payload);
  return {
    type: ADD_STUDENTS,
    payload
  }
}