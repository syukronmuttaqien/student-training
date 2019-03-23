import { AUTH_GET, AUTH_LOGIN , AUTH_LOGOUT } from '../action/type';

const initialState = {
  auth: {
    token: null,
    isAuth: false,
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case AUTH_GET:
      return state;
    case AUTH_LOGIN:
      return {
        ...state,
        auth: { token: action.payload, isAuth: true }
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        auth: { token: null, isAuth: false }
      }
    default:
    return state
  }
}