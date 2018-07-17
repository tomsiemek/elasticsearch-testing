import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';


class Tv extends Component {


    render() {
        return <Item httpRequest = {Links.tvRequest}/>;
    }
}

export default Tv;