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
        let parsed = queryString.parse(this.props.location.search);
        this.getSearchDataFromServer(parsed.q);
    }

    componentWillReceiveProps() {
        this.componentDidMount();
    }
    

    getSearchDataFromServer(phrase) {
        axios.get( "http://localhost:3000/items/search/" + phrase)
        .then(data_ => this.setState( {data: this.transformSearchDataIntoArray(data_) }))     
      }

      transformSearchDataIntoArray (data) {
        if(data.data === undefined) {
          return [];
        }   
        return data.data.hits.hits.map( (item,key) => item._source);
      }

    render() {
        if(this.state.data.length === 0 || this.state.data === undefined){
            return (<div>NO RESULTS FOR THIS </div>);
        }
        return (<PageContent data={this.state.data}/>);
    }
}

export default Search;