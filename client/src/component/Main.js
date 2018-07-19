import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tv from './Tv';
import Phone from './Phone';
import Watch from './Watch';
import Home from './Home';
import Links from '../links';
import Search from './Search'


class Main extends Component {

    

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path={Links.homePath} component={Home} />
                    <Route path={Links.tvsPath} component={Tv} />
                    <Route path={Links.phonesPath} component={Phone} />
                    <Route path={Links.watchesPath} component={Watch} />
                    <Route path="/search" component={Search} searchTerm = {this.props.searchTerm} />
                </Switch>
            </main>
        )
        }
  
}

export default Main;