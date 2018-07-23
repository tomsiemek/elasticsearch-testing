import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';
class Searchbar extends Component {


  render() {
    return (
      <div class="right">
        <Input type="text" placeholder="Szukaj..." onChange={ (event) => {
          console.log("Searchphrase in searchbar: ");
          console.log(event.target.value); 
          return this.props.onChange(event.target.value);}
          } />
      </div>
    );
  }
}

export default Searchbar;