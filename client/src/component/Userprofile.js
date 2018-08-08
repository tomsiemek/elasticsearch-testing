import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react';


export default class Userprofile extends Component {

  render() {
    return (
        this.props.username && <Segment floated='right' compact textAlign='right'>{"LOGGED AS: " + this.props.username}</Segment>
  ) || <div></div>
  }
}
