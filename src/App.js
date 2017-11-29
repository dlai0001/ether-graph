import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DateWindowSelect from './containers/DateWindowSelect';
import LineGraph from './containers/LineGraph';

class App extends Component {
  render() {
    return (
      <div className="App">

        <DateWindowSelect/>
        <LineGraph/>

      </div>
    );
  }
}

export default App;
