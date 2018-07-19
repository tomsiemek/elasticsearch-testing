import React, {Component} from 'react';
import Row from './Row';


class Content extends Component {

    noResults() {
        return (<div>NO RESULTS :(</div>)
    }

    showResults() {
        return this.props.data.map( (item,key) => <Row name = {item.name} producer = {item.producer} />)
    }


    render() {
        console.log("IN CONTENT: ");
        console.log(this.props.data);
        if(this.props.data !== undefined && this.props.data.length !== 0)
        {
            return this.showResults();
        }

        return this.noResults();
    }

}

export default Content;