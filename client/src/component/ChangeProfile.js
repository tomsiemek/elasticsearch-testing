import React, { Component } from 'react';
import {Segment, Input, Button, Container} from 'semantic-ui-react';
import axios from 'axios'
import Links from '../links'
import cookie from 'react-cookies'
export default class ChangeProfile extends Component {
    
    state = {
        oldPassword: '',
        newPassword: '',
        repeatedNewPassword: ''
    }

    changeField = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    getUsername = () => {
        return cookie.load('username');
    }

    sendToServer = () => {
        axios.put(Links.changePasswordRequest + this.getUsername(),this.state)
            .then(res => console.log(res));
    }
    
    render() {
        return (
            <Container className='center aligned grid'>

                <br />
                <Segment>
                    <div><Input placeholder="old password" name='oldPassword' type="password" onChange={this.changeField} /></div>
                    <div><Input placeholder="new password " name='newPassword' type="password" onChange={this.changeField} /></div>
                    <div><Input placeholder="repeat new password" name='repeatedNewPassword' type="password" onChange={this.changeField} /></div>
                    <div><Button onClick={this.sendToServer}>Submit</Button></div>
                </Segment>

            </Container>
        );
    }
}
