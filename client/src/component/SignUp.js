import React, {Component} from 'react';
import {Container, Segment, Input, Button} from 'semantic-ui-react';
import axios from 'axios';
import Links from '../links';

class SignUp extends Component {

    constructor() {
        super();

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeRepeatedPassword = this.changeRepeatedPassword.bind(this);
        this.changeStateField = this.changeStateField.bind(this);
        this.tryToSignUp = this.tryToSignUp.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    state = {
        username: '',
        password: '',
        repeatedPassword: ''
    }

    changeStateField(field, value) {
        this.setState({
            [field]: value
        });
    }

    changeUsername(event) {
        this.changeStateField("username", event.target.value);
    }
    changePassword(event) {
        this.changeStateField("password", event.target.value);
    }
    changeRepeatedPassword(event) {
        this.changeStateField("repeatedPassword", event.target.value);
    }

    bodyForLoginRequest() {
        return {
            login: this.state.username,
            password: this.state.password
        };    
    }


    async tryToSignUp() {
        let body = this.bodyForLoginRequest();
        let data = await axios.post(Links.signUpRequest, body);
        return data;
    }



    handleSignUp() {
        this.tryToSignUp().then(data => {
            console.log(data);
        })
    }

    
    render() {
        return (
            <Container className='center aligned grid'>

                <br />
                <Segment>
                    <div><Input placeholder="username" onChange={this.changeUsername} /></div>
                    <div><Input placeholder="password" type="password" onChange={this.changePassword} /></div>
                    <div><Input placeholder="repeat password" type="password" onChange={this.changeRepeatedPassword} /></div>
                    <div><Button onClick={this.handleSignUp}>Sign up</Button></div>
                </Segment>

            </Container>
        );
    }
}

export default SignUp;