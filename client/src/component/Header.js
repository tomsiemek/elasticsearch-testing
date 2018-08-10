import React, {Component} from 'react';
import Links from '../links';
import {Menu, Icon, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import Language from './Language';
import labels from '../labels';

class Header extends Component {

    render() {
        return (
            <Menu stackable borderless size="large">
                <Menu.Item>
                    <Link color="" to={Links.homePath}><Icon name="home" />{labels.home}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.phonesPath}><Icon name="mobile" />{labels.phones}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.tvsPath}><Icon name="tv" />{labels.tvs}</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to={Links.watchesPath}><Icon name="clock" />{labels.watches}</Link>
                </Menu.Item>

                

                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.addNewPath}><Icon name="plus" />{labels.addNew}</Link>
                </Menu.Item>
                }

                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.profilePath}><Icon name="user" />{labels.profile}</Link>
                </Menu.Item>
                }

                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.userListPath}><Icon name="star" />{labels.userList}</Link>
                </Menu.Item>
                }

                {this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.logsPath}><Icon name="circle" />{labels.logs}</Link>
                </Menu.Item>
                }

                {!this.props.isLogged &&
                 <Menu.Item>
                    <Link to={Links.loginPath}><Icon name="sign in" />{labels.login}</Link>
                </Menu.Item>
                }
                {!this.props.isLogged &&
                <Menu.Item>
                    <Link to={Links.signUpPath}><Icon name="angle double up" />{labels.signUp}</Link>
                </Menu.Item>
                }





                {this.props.isLogged &&
                <Menu.Item as={Button} onClick={this.props.handleLogout}>
                    <font color="red"><Icon name="sign out" />{labels.logOut}</font>
                </Menu.Item>
                }

                <Menu.Item as={Language}>
                    {labels.language}
                </Menu.Item>






            </Menu>
          )
    }
}

export default Header;