import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
import labels from '../labels';
class Searchbar extends Component {

  render() {
    return (
      <div className="right">
        <Input type="text" size="big" placeholder={labels.searchbarPlaceholder} onChange={ (event) => { 
          return this.props.onChange(event.target.value); }
          } autoFocus />
      </div>
    );
  }
}

export default Searchbar;