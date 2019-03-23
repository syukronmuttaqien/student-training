import { GET_STUDENTS, DELETE_STUDENTS, ADD_STUDENTS } from '../action/type';

const initialState = {
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

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
    }
    case DELETE_STUDENTS:
      return {
        ...state,
        students: state.students.filter(student => student.id !== action.payload)
      }
    case ADD_STUDENTS:
      return {
        ...state,
        students: [action.payload, ...state.students]
      }
    default:
    return state
  }
}