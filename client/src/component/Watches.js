import React from 'react';
import Item from './Item';
import Links from '../links';
import {Route, Switch} from 'react-router-dom';

const Watches = (props) => {
    return (
        <Switch>
        <Route path='*' component={() => <Item request={Links.watchRequest} location = {props.location}/>}/>
        </Switch>
    );
}

export default Watches;