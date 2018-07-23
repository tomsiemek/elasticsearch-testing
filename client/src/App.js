import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Searchbar from './component/Searchbar';
import Links from './links';
import Main from './component/Main';
import history from './history';

class App extends Component {


  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }
  searchQuery(phrase) {
    console.log("SEARCH QUERY:");
    console.log( Links.searchQueryPath + '?q=' + phrase);
    return Links.searchQueryPath + '?q=' + phrase;
  }

  search(phrase) {
    console.log("INA APPJS: ");
    console.log(phrase);
    history.push(this.searchQuery(phrase));
  }

   

  render() {

    return (
      <div className="App">
        <Header />
        <Searchbar onChange={this.search}/>
        
        <Main/>
      </div>


    );
  }
}

export default App;
