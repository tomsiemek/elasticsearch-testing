import React, {Component} from 'react';
import Links from '../links';
import {Menu} from 'semantic-ui-react';

const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches"
}

class Header extends Component {


    render() {
        return (
            <Menu>
              <Menu.Item
                name={names.home}
                //active={activeItem === 'editorials'}
                onClick={() => this.props.setPath(Links.homePath)}>
                {names.home}
              </Menu.Item>
      
              <Menu.Item 
                name={names.tvs} 
                //active={activeItem === 'reviews'} 
                onClick={() => this.props.setPath(Links.itemsPath + Links.tvRequest)}>
                {names.tvs}
              </Menu.Item>
      
              <Menu.Item
                name={names.phones}
                //active={activeItem === 'upcomingEvents'}
                onClick={() => this.props.setPath(Links.itemsPath + Links.phoneRequest)}>
                {names.phones}
              </Menu.Item>

              <Menu.Item
                name={names.watches}
                //active={activeItem === 'editorials'}
                onClick={() => this.props.setPath(Links.itemsPath + Links.watchRequest)}>
                {names.watches}
              </Menu.Item>
            </Menu>
          )
    }
}

export default Header;