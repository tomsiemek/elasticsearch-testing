import React, {Component} from 'react';

class Searchbar extends Component {


  render() {
    return (
      <form>
        <input className="Searchbar" type="text" placeholder="Szukaj..." onChange={(event) => this.props.onChange(event.target.value)} />
      </form>
    );
  }
}

export default Searchbar;