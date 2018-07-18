import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Searchbar from './component/Searchbar';

class App extends Component {
  render() {

    // state :{
      
    // }

    return (
      <div className="App">
        <Searchbar/>
        <Header />
        
        <Main />
      </div>


    );
  }
}

export default App;
