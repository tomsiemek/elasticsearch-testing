import React, {Component} from 'react';

class Searchbar extends Component {


  render() {
    return (
      <form>
        <input className="Searchbar" type="text" placeholder="Szukaj..." onChange={this.props.onChange} />
      </form>
    );
  }
}

export default Searchbar;