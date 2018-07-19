import React, {Component} from 'react';


class PageButton extends Component {
    render() {
        return (<button onClick={ () => this.props.onClick(this.props.number) }>
            {this.props.number}

        </button>);
    }
}

export default PageButton;