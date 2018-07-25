import React from 'react';
import Item from './Item';
import Links from '../links';

const Watches = (props) => {
    return (
        <Item request={Links.watchRequest} location = {props.location}/>
    );
}

export default Watches;