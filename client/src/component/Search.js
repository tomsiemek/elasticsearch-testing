import React, {Component} from 'react';
import Links from '../links';
import axios from 'axios';



class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: props.searchTerm,
            data: []
        }
    }

    componentDidMount() {
        console.log("search from Search: " + this.state.searchTerm);
        axios.get(Links.searchPath + '/' + this.state.searchTerm )
        .then(data_ => {this.setState({data: data_.data.hits.hits})});
    }

    showData(){
        if(this.state.data.Length !== 0)
            return this.state.data[0];
    }

    render() {
     return( <div> {this.showData()}</div> );
    }
}

export default Search;