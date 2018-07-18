import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Main from "./component/Main";
import Searchbar from './component/Searchbar';
import Links from './links';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
      console.log("search: " + event.target.value);


    axios.get(Links.searchPath + '/' + event.target.value )
    .then(data_ => {this.setState({data: data_.data.hits.hits})});
      


    }

    returnObjects() {
      return this.state.data.map((item,key) => item._source);
    }

  render() {

    // state :{
      
    // }
    console.log("STATE: ");
    console.log(this.state);


    console.log("State transformed: ")
    console.log(this.returnObjects());


    return (
      <div className="App">
        <Searchbar onChange={this.onChange}/>
        <Header />
        
        <Main searchData={this.returnObjects()}/>
      </div>


    );
  }
}

export default App;
