import React from 'react';
import Item from './Item';
import Links from '../links';

const Phones = () => {
    return (
        <Item request={Links.phoneRequest}/>
    )
}

export default Phones;