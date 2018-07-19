import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
class Searchbar extends Component {


  render() {
    return (
      <div class="right">
        <Input type="text" placeholder="Szukaj..." onChange={(event) => this.props.onChange(event.target.value)} />
      </div>
    );
  }
}

export default Searchbar;