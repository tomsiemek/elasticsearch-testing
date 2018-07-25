import React from 'react';
import Item from './Item';
import Links from '../links';

const Phones = (props) => {
    return (
        <Item request={Links.phoneRequest} location = {props.location}/>
    )
}

export default Phones;