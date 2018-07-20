import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tvs from './Tvs';
import Phones from './Phones';
import Watches from './Watches';
import Home from './Home';
import Links from '../links';
import Search from './Search';
import NoResult from './NoResult';
class Main extends Component {

    

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path={Links.homePath} component={Home} />
                    <Route path={Links.tvsPath} component={Tvs} />
                    <Route path={Links.phonesPath} component={Phones} />
                    <Route path={Links.watchesPath} component={Watches} />
                    <Route path={Links.searchPath} component={Search} />
                    <Route path={Links.anyPath} component={NoResult}/>
                </Switch>
            </main>
        )
        }
  
}

export default Main;