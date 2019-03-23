import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const initialState = {};
const middleware =  [thunk];
const middlewareReady = applyMiddleware(...middleware);
const composer = compose(
    middlewareReady,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const store = createStore(rootReducer, initialState, composer);

export default store;