import React, {Component} from 'react';
import {Container, Input, Segment, Button} from 'semantic-ui-react';
import axios from 'axios';
import Links from'../links';
class Login extends Component {


    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
            loginFail: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.tryToLogIn = this.tryToLogIn.bind(this);

    }

    bodyForLoginRequest() {
        return {
            login: this.state.username,
            password: this.state.password
        };
    }

    async tryToLogIn() {
        let body = this.bodyForLoginRequest();
        let data = await axios.post(Links.loginRequest, body);
        return data;
    }

    handleLoginClick() {
        this.tryToLogIn().then(data => {
            console.log(data);
            if (data !== undefined) {
                if (data.data.success) {
                    this.setState({ loginSuccess: true, loginFail: false });
                    this.props.handleLogin(data.data.token, this.state.username);
                }
                else {
                    this.setState({ loginFail: true, loginSuccess: false });
                }
            }
        });
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            <Container className='center aligned grid'>
                {this.state.loginSuccess && <div>LOGIN SUCCESS</div>}
                {this.state.loginFail && <div>LOGIN Failure</div>}
                <br/>
                <Segment>
                    <div><Input placeholder="username" onChange={this.handleUsernameChange} /></div>
                    <div><Input placeholder="password" type="password" onChange={this.handlePasswordChange} /></div>
                    <div><Button onClick={this.handleLoginClick}>Log in</Button></div>
                </Segment>
                
            </Container>
        )
    }
}

export default Login;