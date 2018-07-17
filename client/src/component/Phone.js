import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';



class Phone extends Component {


    render() {
     return <Item httpRequest = {Links.phoneRequest}/>;
    }
}

export default Phone;