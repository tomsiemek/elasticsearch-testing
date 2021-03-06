import React, {Component} from 'react';
import {Container, Input, Segment, Button} from 'semantic-ui-react';
import axios from 'axios';
import Links from'../links';
import {Redirect} from 'react-router'
import labels from '../labels';


class Login extends Component {


    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

    }

    bodyForLoginRequest = () => {
        return {
            login: this.state.username,
            password: this.state.password
        };
    }

     tryToLogIn = async () => {
        let body = this.bodyForLoginRequest();
        let data = await axios.post(Links.loginRequest, body);
        return data;
    }

    handleLoginClick = () => {
        this.tryToLogIn().then(data => {
            console.log(data);
            console.log(this.state);
            if (data !== undefined) {
                if (data.data.success) {
                    this.setState({ loginSuccess: true, loginFail: false });
                    this.props.handleLogin(data.data.token, this.state.username);
                }
                else {
                    this.setState({ loginFail: true, loginSuccess: false });
                }
                console.log(this.state);
            }
        });
    }

    handleUsernameChange =(event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <Container className='center aligned grid'>
            <br/>
            <Segment>
                <Segment color='blue'>{labels.loginPageTitle}</Segment>
                {this.state.loginSuccess && <Redirect to='/'/>}
                
                
                <div><Input placeholder={labels.loginPageUsername} onChange={this.handleUsernameChange} /></div>
                <div><Input placeholder={labels.loginPagePassword} type="password" onChange={this.handlePasswordChange} /></div>
                <div><Button onClick={this.handleLoginClick}>Log in</Button></div>
                {this.state.loginFail && <Segment  inverted color='red'>{labels.loginPageFailure}</Segment>}
            </Segment>
                
            </Container>
        )
    }
}

export default Login;