import React from 'react';
import Item from './Item';
import Links from '../links';
import {Route, Switch} from 'react-router-dom';

const Phones = (props) => {
    return (
        <Switch>
        <Route path='*' component={() => <Item request={Links.phoneRequest} location = {props.location}/>}/>
        </Switch>
    )
}

export default Phones;