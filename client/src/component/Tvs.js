import React from 'react';
import Item from './Item';
import Links from '../links';

const Tvs = (props) => {
    return (
        <Item request={Links.tvRequest} location = {props.location}/>
    )
}

export default Tvs;