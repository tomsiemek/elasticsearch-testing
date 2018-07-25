import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class PageButton extends Component {
    render() {
        return (<Button basic as={Link} to={this.props.request + '?page=' + this.props.number}>
            {this.props.number}

        </Button>);
    }
}

export default PageButton;