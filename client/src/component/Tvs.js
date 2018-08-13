import React from 'react';
import Item from './Item';
import Links from '../links';
import {Route, Switch} from 'react-router-dom';

const Tvs = (props) => {
    return (
        <Switch>
        <Route path='*' component={() => <Item request={Links.tvRequest} location = {props.location}/>}/>
        </Switch>
    )
}

export default Tvs;