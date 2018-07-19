import React, {Component} from 'react';
import Links from '../links';


const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches"
}

class Header extends Component {


    render() {
        return (

            <nav className="Navbar" >
                <ul className="Navbar">
                    <li className="Navbar"><button onClick={() => this.props.setPath(Links.homePath)}>{names.home}</button></li>
                    <li className="Navbar"><button onClick={() => this.props.setPath(Links.itemsPath + Links.tvRequest)}>{names.tvs}</button></li>
                    <li className="Navbar"><button onClick={() => this.props.setPath(Links.itemsPath + Links.phoneRequest)}>{names.phones}</button></li>
                    <li className="Navbar"><button onClick={() => this.props.setPath(Links.itemsPath + Links.watchRequest)}>{names.watches}</button></li>
                </ul>
            </nav>

        );
    }
}

export default Header;