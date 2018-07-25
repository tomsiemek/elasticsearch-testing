import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
class Searchbar extends Component {

  render() {
    

    return (

      <div className="right">
        <Input type="text" size="big" placeholder="Search.." onChange={ (event) => {
          console.log("Searchphrase in searchbar: ");
          console.log(event.target.value); 
          return this.props.onChange(event.target.value); }
          } autoFocus />
      </div>
    );
  }
}

export default Searchbar;