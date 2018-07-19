import React, {Component} from 'react';
import { Header, Table, Rating, TableCell } from 'semantic-ui-react';


class Content extends Component {

    noResults() {
        return (<div>NO RESULTS :(</div>)
    }

    showResults() {
        return (
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Producer</Table.HeaderCell>
                        <Table.HeaderCell>Quality</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.data.map((item, key) =>
                        <Table.Row>
            <Table.Cell>
                                {item.name}
                            </Table.Cell>
                            <Table.Cell>
                                {item.producer || "NO DATA :("}
                            </Table.Cell>
                            <Table.Cell>
                                <Rating icon='star' defaultRating={3} maxRating={3} />
                            </Table.Cell>

                        </Table.Row>)}
                </Table.Body>
            </Table>)
    }


    render() {
        console.log("IN CONTENT: ");
        console.log(this.props.data);
        if(this.props.data !== undefined && this.props.data.length !== 0)
        {
            return this.showResults();
        }

        return this.noResults();
    }

}

export default Content;