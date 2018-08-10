import React, { Component } from 'react'
import axios from 'axios';
import cookie from 'react-cookies';
import Links from '../links';
import {Table, Container} from 'semantic-ui-react';

export default class Logs extends Component {

    getToken = () => {
        return cookie.load('token');
    }

    state = {
        combinedData: [],
    }

    loadCombined = () => {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': this.getToken()
        }

        axios({
            method: 'get',
            url: Links.logsCombinedRequest,
            headers: headers
        })
            .then( data => this.logsToState(data.data) );

    }
    // taken from github.com/isur/shop xD
    logsToState = (logsString) =>{
        let logs = logsString.split('\n');
        logs.length = logs.length - 1;
        logs = logs.map(item => JSON.parse(item));
        this.setState({combinedData: logs});
    }

    componentDidMount = () => {
        this.loadCombined();
    }

    render() {
        let data = this.state.combinedData;
        console.log(data);
        if (data !== undefined) {

            return (
                <Container>
                    <Table>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Message</Table.HeaderCell>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Time</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.state.combinedData.map((item, key) => {
                                    return (
                                        <Table.Row>
                                            <Table.Cell>
                                                {item.message}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {item.date}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {item.time}
                                            </Table.Cell>

                                        </Table.Row>
                                    )
                                })
                            }
                        </Table.Body>
                    </Table>
                </Container>
            )

        }

    else return (
      <div>
        logsgsga
      </div>
    )
  }
}
