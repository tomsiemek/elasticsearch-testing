import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header";
import Searchbar from './component/Searchbar';
import Links from './links';
import Main from './component/Main';
import history from './history';
import cookie  from 'react-cookies';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      token: '',
      username: ''
    };
    
    this.search = this.search.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if(cookie.load('username') !== this.userNameLoggedOff)
    {
      this.setStateLoggedIn(cookie.load('username'), cookie.load('token'));
    }
  }

  setStateLoggedIn(username, token) {
    this.setState({
      isLogged: true,
      token: token,
      username: username
    })
  }


  

  handleLogin(token, username) {
    
    this.setStateLoggedIn(username, token);
    cookie.save(
      'token', 
      `Bearer ${token}`, 
    );
    cookie.save('username', username);

  }
  userNameLoggedOff = '!';
  handleLogout() {
    this.setState({
      isLogged: false,
      token: '',
      username: ''
    })

    cookie.save('username', this.userNameLoggedOff );

  }



  onSignIn() {

  }

  searchQuery(phrase) {
    console.log("SEARCH QUERY:");
    console.log( Links.searchQueryPath + '?q=' + phrase);
    return Links.searchQueryPath + '?q=' + phrase;
  }

  search(phrase) {
    console.log("INA APPJS: ");
    console.log(phrase);
    history.push(this.searchQuery(phrase));
  }

   

  render() {

    return (
      <div className="App">
        <Header handleLogout={this.handleLogout} isLogged={this.state.isLogged} />
        <Searchbar onChange={this.search}/>
        
        <Main handleLogin={this.handleLogin}/>
      </div>


    );
  }
}

export default App;
