import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Content from "./component/Content";
import Searchbar from './component/Searchbar';
import axios from 'axios';
import Links from './links';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.getSearchDataFromServer = this.getSearchDataFromServer.bind(this);
    this.getItemDataFromServer = this.getItemDataFromServer.bind(this);
  }


    getSearchDataFromServer(phrase) {

      console.log("getting search data from server... first raw:");

      axios.get(Links.searchPath + '/' + phrase)
        .then(data => {console.log(data); return data;})
        .then(data_ => {this.setState({data: this.transformSearchDataIntoArray(data_)})});

      
      
    }

    transformSearchDataIntoArray (data) {
      if(data.data === undefined) {
        return [];
      } 

      return data.data.hits.hits.map( (item,key) => {
        return item._source;
      } );
    }

    transformItemDataIntoArray(data) {
      if(data.data === undefined) {
        return [];
      }
      return data.data.docs;
    }

    getItemDataFromServer(path) {

      if(path === Links.homePath)
      {
        this.setState({ data: ["HOME", "SWEET"]});
        return;
      }
      let request = path + '/page/' + 1
      console.log(request)

      axios.get(request )
      .then(data_ => {this.setState({data: this.transformItemDataIntoArray(data_)})});
    }

    returnObjects() {
      return this.state.data.map((item,key) => item._source);
    }

  render() {

    
    console.log("DATA: ");


    console.log(this.state.data);



    return (
      <div className="App">
        <Searchbar onChange={this.getSearchDataFromServer}/>
        <Header setPath={this.getItemDataFromServer} />
        
        <Content data={this.state.data}/>
      </div>


    );
  }
}

export default App;
