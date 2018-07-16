import React, { Component } from 'react';
import './App.css';
import Output from './component/Output'

class App extends Component {
  render() {

    state :{
      records: []
    }

    return (
      <div className="App">
          <h3>TEST</h3>
          <Output records = {this.state.records}/>
      </div>
    );
  }
}

export default App;
