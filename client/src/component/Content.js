import React, {Component} from 'react';
import { Table, Rating, Container} from 'semantic-ui-react';
import _ from 'lodash';

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

    homeText = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
    Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
    consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
    In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
    link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
    enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
    ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
    Curabitur ullamcorper ultricies nisi.`;

    showHome() {
        return <Container>
        <p>
          {_.range(10).map( () => this.homeText)}

        </p>
      </Container>
    }


    render() {
        console.log("IN CONTENT: ");
        console.log(this.props.data);

        if(this.props.data !== undefined && this.props.data[0] === "HOME")
            return this.showHome();


        if(this.props.data !== undefined && this.props.data.length !== 0) {
            return this.showResults();
        }

        


        return this.noResults();
    }

}

export default Content;