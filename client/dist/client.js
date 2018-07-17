import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header"
import Main from "./component/Main"

class App extends Component {
  render() {

    // state :{
      
    // }

    return (
      <div className="App">
        <Header />

        <Main />
      </div>


    );
  }
}

export default App;
;import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
;import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Links from '../links';


const names = {
    home: "Home",
    tvs: "Tvs",
    phones: "Phones",
    watches: "Watches"
}

class Header extends Component {


    render() {
        return (

            <nav className="Navbar" >
                <ul className="Navbar">
                    <li className="Navbar"><Link to={Links.homePath}>{names.home}</Link></li>
                    <li className="Navbar"><Link to={Links.tvsPath}>{names.tvs}</Link></li>
                    <li className="Navbar"><Link to={Links.phonesPath}>{names.phones}</Link></li>
                    <li className="Navbar"><Link to={Links.watchesPath}>{names.watches}</Link></li>
                </ul>
            </nav>

        );
    }
}

export default Header;;import React, {Component} from 'react';

class Home extends Component {
    text = "STRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWASTRONA DOMOWA";

    render() {
        return this.text;
    }
}

export default Home;;import React, {Component} from 'react';
import Links from '../links';
import PageButton from './PageButton';

const Row = (props) => {
    return <div>NAME: {props.name} PRODUCER: {props.producer}<br/></div>;
}

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            currentPage: 1,
            httpRequest: this.props.httpRequest
        }

        this.updatePageNumber = this.updatePageNumber.bind(this);
    }

    loadPage(pageNumber) {
        fetch(Links.itemsPath + this.state.httpRequest + '/' + pageNumber)
        .then(data => data.json())
        .then(data__ => {this.setState({data: data__}); return data__;})
        .then(data_ => console.log(data_))
        .catch(e => console.log(e));
    }

    componentDidMount() {
        this.loadPage(1);
        
    }

    showData(){
        if(this.state.data.docs == null) {
            return (<div>NO DATA :(</div>)
        }

        return this.state.data.docs.map( (item,key) => (
            <Row name={item.name} producer={item.producer}/>
        ));
    }

    showButtons() { 
        var arr = [this.state.data.pages];
        for(let i = 0; i < this.state.data.pages; i++)
            arr[i] = i+1;
        return arr.map((item) => <PageButton number={item} onClick={ () => {this.updatePageNumber(item)} } />)
    }

    updatePageNumber(newNumber) {
        console.log("updating PAGE!!!!");
        this.loadPage(newNumber);
    }



    render() {
            return(
            <div>
                
                {this.showData()} 
                {this.showButtons()} 
            

            </div>);
        
        
        
    }
}

export default Item;;import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Tv from './Tv';
import Phone from './Phone';
import Watch from './Watch';
import Home from './Home';
import Links from '../links';



class Main extends Component {


    render() {
        return (
            <main>
                <Switch>
                    <Route exact path={Links.homePath} component={Home} />
                    <Route path={Links.tvsPath} component={Tv} />
                    <Route path={Links.phonesPath} component={Phone} />
                    <Route path={Links.watchesPath} component={Watch} />
                </Switch>
            </main>
        );
    }
}

export default Main;;import React, {Component} from 'react';


class PageButton extends Component {
    render() {
        return (<button onClick={this.props.onClick}>
            {this.props.number}

        </button>);
    }
}

export default PageButton;;import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';



class Phone extends Component {


    render() {
     return <Item httpRequest = {Links.phoneRequest}/>;
    }
}

export default Phone;;import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';


class Tv extends Component {


    render() {
        return <Item httpRequest = {Links.tvRequest}/>;
    }
}

export default Tv;;import React, {Component} from 'react';
import Item from './Item';
import Links from '../links';

class Watch extends Component {


    render() {
        return <Item httpRequest = {Links.watchRequest}/>;
    }
}

export default Watch;;

module.exports = function get(url, method) {
    
    fetch(url)
        .then(method)
        .catch(e => console.log(e));

};import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
;module.exports = {
    homePath: "/",
    phonesPath: "/phone",
    watchesPath: "/watch",
    tvsPath: '/tv',
    itemsPath: 'http://localhost:3000/items',
    phoneRequest: '/PHONE',
    tvRequest: '/TV',
    watchRequest: '/WATCH'
};;// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://goo.gl/SC7cgQ'
          );
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log('New content is available; please refresh.');
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
