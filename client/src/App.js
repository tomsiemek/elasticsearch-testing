import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Content from "./component/Content";
import Searchbar from './component/Searchbar';
import axios from 'axios';
import Links from './links';
import PageButton from './component/PageButton';


const Buttons = (props) => {
  var buttons = [];
  for(let i = 0; i < props.maxNumberOfPages; i++) {
    buttons.push(i+1);
  }

  return buttons.map( (item,key) => {
    return <PageButton number = {item} onClick={props.onClick}/>
  } )


}


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentPageNumber: 1,
      maxNumberOfPages:1,
      currentContentPath: Links.homePath
    }

    this.getSearchDataFromServer = this.getSearchDataFromServer.bind(this);
    this.getItemDataFromServer = this.getItemDataFromServer.bind(this);
    this.getContentPath = this.getContentPath.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
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
        this.setState({ data: ["HOME", "SWEET"], currentPageNumber: 0, maxNumberOfPages: 0});
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
      .then(data_ => {this.setState({data: this.transformItemDataIntoArray(data_), maxNumberOfPages: this.getMaxNumberOfPages(data_)})});
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
        <Header setPath={this.getContentPath} />
        
        <Content data={this.state.data}/>
        <Buttons maxNumberOfPages={this.state.maxNumberOfPages} onClick={this.changeCurrentPage}/>
      </div>


    );
  }
}

export default App;
