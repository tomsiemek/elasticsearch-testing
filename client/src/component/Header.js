import React, {Component} from 'react';
import Links from '../links';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 

const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches",
    addNew: "Add new"
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

                <Menu.Item>
                    <Link to={Links.addNewPath}><Icon name="shop" />{names.addNew}</Link>
                </Menu.Item>

            </Menu>
          )
    }
}

export default Header;