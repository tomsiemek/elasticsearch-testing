import React, {Component} from 'react';
import getData from '../getData';

class Phone extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'test'
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/items')
        .then(data => data.json())
        .then(data_ => console.log(data_))
        .catch(e => console.log(e));
        
    }

    render() {
        return(<div></div>)
    }
}

export default Phone;