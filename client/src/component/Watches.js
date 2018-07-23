import React from 'react';
import Item from './Item';
import Links from '../links';

const Watches = () => {
    return (
        <Item request={Links.watchRequest}/>
    );
}

export default Watches;