import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Students from './components/students/Students';
// import Dummy from './components/Dummy';
import Navbar from './components/layout/Navbar';
// import MonggoPesan from './challenges/MonggoPesan';
// import Inputs from './components/Inputs';
import 'antd/dist/antd.css';
// import Student from './components/students/Student';
import AddStudent from './components/students/AddStudent';
import About from './components/pages/about';
import notFound from './components/pages/notFound';
// import { Layout, Row } from 'antd';
// import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditStudent from './components/students/EditStudent';
import Login from './components/Login';

import { Provider } from 'react-redux';
import store from './store/store';
import Register from './components/Register';
class App extends Component {
  render() {
    // const name = 'Budi'
    // const showHello = true
    // const showCount = true
    // const num1 = 2;
    // const num2 = 3;
    // let math;
    // if (showCount) {
    //   math = <h1>{num1} + {num2} = {num1 + num2}</h1>
    // } else {
    //   math = null
    // }
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar title="studdents list" />
            <Switch>
              <Route exact path="/" component={Students} />
              <Route exact path="/student/add" component={AddStudent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/student/edit/:id" component={EditStudent} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route component={notFound} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
