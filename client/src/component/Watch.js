import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';

class Watch extends Component {


    render() {
        return <Item httpRequest = {Links.watchRequest}/>;
    }
}

export default Watch;