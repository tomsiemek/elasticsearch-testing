import React, {Component} from 'react';
import axios from 'axios';
import PageContent from './PageContent';
const queryString = require('query-string');

class Search extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    

    componentDidMount() {
        console.log("phrase in DidMount: ");
        let parsed = queryString.parse(this.props.location.search);
        console.log(parsed.q);
        this.getSearchDataFromServer(parsed.q);
    }

    componentWillReceiveProps() {
        console.log("phrase in DidMount: ");
        let parsed = queryString.parse(this.props.location.search);
        console.log(parsed.q);
        this.getSearchDataFromServer(parsed.q);
    }
    

    getSearchDataFromServer(phrase) {

        console.log("Searching phrase: ");
        console.log(phrase);

        axios.get( "http://localhost:3000/items/search/" + phrase)
        .then(data_ => this.setState( {data: this.transformSearchDataIntoArray(data_) }))
      
      }

      transformSearchDataIntoArray (data) {
        console.log("DATA: ");
        console.log(data);

        if(data.data === undefined) {
          return [];
        }   
        return data.data.hits.hits.map( (item,key) => item._source);
      }




    render() {
        if(this.state.data.length === 0 || this.state.data === undefined){
            return (<div>NO RESULTS FOR THIS </div>);
        }

        console.log("DATA FOR IN SEARCH:");
        console.log(this.state.data);
        return (<PageContent data={this.state.data}/>);
    }
}

export default Search;