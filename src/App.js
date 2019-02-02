import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import Students from './Component/Students';
// import Header from './Component/Header';

import Register from './Component/Register';

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
      <div>
        {/* <Header title="Students' list" />
        <Students 
          name="Muhsin Sutanto"
          email="sutantomuhsin@gmail.com"
          phone="123456"
        />

        <Students 
          name="Agung Prasetyo"
          email="agungprasetyo@gmail.com"
          phone="232332132"
        />

        <Students 
          name="Syukron Muttaqien"
          email="syukronmuttaqien@gmail.com"
          phone="77777"
        />

        <Students 
          name="Ningsih"
          email="Ningsih@gmail.com"
          phone="08665343123"
        />   */}
        <Register />
      </div>
    )
  }
}

export default App;
