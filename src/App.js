
import React, { Component } from 'react';

import Classes from './classes/Classes';
import Functions from './functions/Functions';
import Redux from './redux/Redux';

import './App.css';


class App extends Component {

  render() {
    return (

      <div className="app">

        <div className="section">
          <h2>On Classes:</h2>
          <Classes />
        </div>

        <div className="section">
          <h2>On Functions:</h2>
          <Functions />
        </div>

        <div className="section">
          <h2>With Redux:</h2>
          <Redux />
        </div>
      </div>
    );
  }
}

export default App;