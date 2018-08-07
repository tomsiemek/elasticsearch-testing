import React, {Component} from 'react';
import Links from '../links';
import {Menu, Icon, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 

const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches",
    addNew: "Add new",
    login: "Login",
    signUp: "Sign Up",
    userList: "Users"
}

class Header extends Component {


    render() {
        return (
            <Menu stackable borderless size="large">
                <Menu.Item>
                    <Link color="" to={Links.homePath}><Icon name="home" />{names.home}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.phonesPath}><Icon name="mobile" />{names.phones}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.tvsPath}><Icon name="tv" />{names.tvs}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.watchesPath}><Icon name="clock" />{names.watches}</Link>
                </Menu.Item>
                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.addNewPath}><Icon name="plus" />{names.addNew}</Link>
                </Menu.Item>
                }

                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.userListPath}><Icon name="user" />{names.userList}</Link>
                </Menu.Item>
                }

                {!this.props.isLogged &&
                 <Menu.Item>
                    <Link to={Links.loginPath}><Icon name="sign in" />{names.login}</Link>
                </Menu.Item>
                }
                {!this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.signUpPath}><Icon name="angle double up" />{names.signUp}</Link>
                </Menu.Item>
                }

                {this.props.isLogged &&
                <Menu.Item as={Button} onClick={this.props.handleLogout}>
                    <font color="red"><Icon name="sign out" />Log Out</font>
                </Menu.Item>
                }






            </Menu>
          )
    }
}

export default Header;