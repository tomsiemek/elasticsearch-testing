import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tv from './Tv';
import Phone from './Phone';
import Watch from './Watch';
import Home from './Home';
import Links from '../links';
import Row from './Row';


class Main extends Component {

    showData(){
        return this.props.searchData[0].name;
    }

    render() {
        if(this.props.searchData.length === 0) {
        return (
            <main>
                <Switch>
                    <Route exact path={Links.homePath} component={Home} />
                    <Route path={Links.tvsPath} component={Tv} />
                    <Route path={Links.phonesPath} component={Phone} />
                    <Route path={Links.watchesPath} component={Watch} />
                </Switch>
            </main>
        )
        }

        return this.showData();
    }


    
}

export default Main;