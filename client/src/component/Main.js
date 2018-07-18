import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tv from './Tv';
import Phone from './Phone';
import Watch from './Watch';
import Home from './Home';
import Links from '../links';
import Row from './Row';


class Main extends Component {

    showData(data){
        if(data == null) {
            return (<div>NO DATA :(</div>)
        }

        return this.state.data.docs.map( (item,key) => (
            <Row name={item.name} producer={item.producer}/>
        )) ;
    }

    render() {
        
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


    
}

export default Main;