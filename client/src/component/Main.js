import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tvs from './Tvs';
import Phones from './Phones';
import Watches from './Watches';
import Home from './Home';
import Links from '../links';
import Search from './Search';
import NoResult from './NoResult';
import Product from './Product'
import AddNewItem from './AddNewItem'
import Login from './Login';
import SignUp from './SignUp';
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
                    <Route path={Links.productPath} component={Product}/>
                    <Route path={Links.addNewPath} component={AddNewItem}/>
                    <Route path={Links.loginPath} component={() => <Login handleLogin = {this.props.handleLogin}/>}/>
                    <Route path={Links.signUpPath} component={SignUp}/>
                    <Route path={Links.anyPath} component={NoResult}/>
                </Switch>
            </main>
        )
        }
  
}

export default Main;