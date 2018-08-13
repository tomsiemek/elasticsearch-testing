import React, { Component } from 'react'
import {Segment, Label} from 'semantic-ui-react';
import labels from '../labels';

export default class Userprofile extends Component {

  render() {
    return (
        this.props.username && 
        <Segment floated='right' compact textAlign='right'>
            <Label color='blue'>
                {labels.userLabel}
                <Label.Detail>{this.props.username}</Label.Detail>
            </Label>
        </Segment>
  ) || <div></div>
  }
}
