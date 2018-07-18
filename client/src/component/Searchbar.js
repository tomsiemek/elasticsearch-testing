import React, {Component} from 'react';
import ReactiveSearch from 'reactive-search';

class Searchbar extends Component {


    render() {
     return (<ReactiveSearch
        classes={['input', 'rounded-corner', 'Searchbar']}
        getUrlToRequest={searchTerm => `/search/${searchTerm}`}
        onResponse={response => console.log('Got response', response)}
        shouldRetryOnError={error => false}
        onFatalError={error => console.error('Big Bad Bug', error)}
      />);
    }
}

export default Searchbar;