import React, { Component } from 'react';
import Students from './Component/Students';
import Header from './Component/Header';

import Register from './Component/Register';
import { Provider } from './Context';

class App extends Component {
  render() {
    // const name = 'Syukron';
    // const showHello = true;
    // const showCount = true;
    // const num1 = 2;
    // const num2 = 3;
    // let math;

    // if (showCount) {
    //   math = <h1> {num1} + {num2} = {num1 + num2}</h1>
    // } else {
    //   math = null;
    // }

    // return (
    //   <div>
    //     {showHello ? <p> hello {name} </p> : null}
    //     {math}
    //   </div>

    // );

    return (
      <Provider>
        <div>
          <Header title="Students" />
          <Students />
        </div>
      </Provider>
    )
  }
}

export default App;
