import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class PageButton extends Component {
    render() {
        return (<Button basic onClick={ () => this.props.onClick(this.props.number) }>
            {this.props.number}

        </Button>);
    }
}

export default PageButton;