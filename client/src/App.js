import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Content from "./component/Content";
import Searchbar from './component/Searchbar';
import axios from 'axios';
import Links from './links';
import PageButton from './component/PageButton';
import Tvs from './component/Tvs';
import Main from './component/Main';
import history from './history';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: ["HOME"],
      currentPageNumber: 1,
      maxNumberOfPages:0,
      currentContentPath: Links.homePath
    }

    this.getSearchDataFromServer = this.getSearchDataFromServer.bind(this);
    this.getItemDataFromServer = this.getItemDataFromServer.bind(this);
    this.getContentPath = this.getContentPath.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.search = this.search.bind(this);
    this.searchQuery = this.searchQuery.bind(this);
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

    changeCurrentPage(newPage) {
      this.setState({currentPageNumber: newPage});
      console.log(this.state.currentContentPath + '/page/' + this.state.currentPageNumber);
      this.getItemDataFromServer(this.state.currentContentPath + '/page/' + this.state.currentPageNumber);
    }

    getSearchDataFromServer(phrase) {

      this.setState({currentContentPath: Links.searchPath, currentPageNumber: 1, maxNumberOfPages: 0})
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


    getContentPath(path) {

      if(path === Links.homePath)
      {
        this.setState({ data: ["HOME"], currentPageNumber: 0, maxNumberOfPages: 0});
        return;
      }

      console.log("NEW PATH: " );
      console.log(path);

      this.setState({currentPageNumber: 1, currentContentPath: path});
      this.getItemDataFromServer(path + '/page/' + this.state.currentPageNumber);
    }

    getMaxNumberOfPages(data) {
      return data.data.pages;
    }

    getItemDataFromServer(path) {
      console.log(path);

      axios.get(path )
      .then(data => {console.log(data); return data;})
      .then(data_ => {this.setState({data: this.transformItemDataIntoArray(data_), maxNumberOfPages: this.getMaxNumberOfPages(data_)})})

      

    }


    returnObjects() {
      return this.state.data.map((item,key) => item._source);
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
