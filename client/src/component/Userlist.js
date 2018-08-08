import React, { Component } from 'react';
import axios from 'axios';
import Links from '../links'
import {Table, TableBody, TableRow, TableCell, Button, Container} from 'semantic-ui-react';
import cookie from 'react-cookies';
import labels from '../labels';


class Userlist extends Component {
    state = {
        data: [],
        fail: true
    }



    getData = () => {

        let headers = {
            'Content-Type': 'application/json',
            'Authorization' : cookie.load('token')
        }

        axios( {
            method:'get',
            url: Links.userListRequest,
            headers: headers
        }).then(data =>  {
            if(data.data.msg !== undefined) {
                this.setState({fail: true});
            }
            else {
                this.setState({ data: data.data, fail: false });
            }
                
        });
    }

    componentDidMount = () => {
        this.getData();
    }

    deleteUser = (_id) => {
        console.log(`DELTE HIM: ${_id}`)
    }

    render() {

        console.log(this.state.fail);
        console.log(this.state.data);

        if (this.state.fail) {
            return (
                <div>
                    {labels.userlistNoAuth}
                 </div>
            )
        }

        else {
            return (

                <Container>
                    <Table>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>{labels.loginCaps}</Table.HeaderCell>
                                <Table.HeaderCell>{labels.id}</Table.HeaderCell>
                                <Table.HeaderCell>{labels.delete}</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <TableBody>
                            {
                                this.state.data.map((item, key) => {
                                    console.log(item);
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                {item.login}
                                            </TableCell>

                                            <TableCell>
                                                {item._id}
                                            </TableCell>

                                            <TableCell>
                                                <Button color='red' onClick={() => this.deleteUser(item._id)}>
                                                    {labels.delete}
                                            </Button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Container>
            )
        }
    }
}

export default Userlist;
