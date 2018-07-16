import React, {Component} from 'react';


class Sidebar extends Component {


    render() {
        return (
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}

export default Sidebar;