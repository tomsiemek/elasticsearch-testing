import React, {Component} from 'react';
import Links from '../links';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 

const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches"
}

class Header extends Component {


    render() {
        return (
            <Menu stackable>
              <Menu.Item>
                <Link to={Links.homePath}>{names.home}</Link>
              </Menu.Item>
      
              <Menu.Item>
              <Link to={Links.phonesPath}>{names.phones}</Link>
              </Menu.Item>
      
              <Menu.Item>
              <Link to={Links.tvsPath}>{names.tvs}</Link>
              </Menu.Item>

              <Menu.Item>
              <Link to={Links.watchesPath}>{names.watches}</Link>
              </Menu.Item>
            </Menu>
          )
    }
}

export default Header;