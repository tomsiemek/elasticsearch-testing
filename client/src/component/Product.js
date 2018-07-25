import React, {Component} from 'react';
import {Container, Image, Table, Divider} from 'semantic-ui-react';
import axios from 'axios';
import Links from '../links';
import queryString from 'query-string';
import errorImage from '../images/sadFace.png';


const aliases = {
    name: 'name',
    producer: 'producer',
    type: "type",
    price: "price",
    amount: 'amount'
}

class Product extends Component {

    state = {
        product: {},
        noResult: false
    }


    componentDidMount() {
        let parsed = queryString.parse(this.props.location.search);
        let id = parsed.id;
        this.getProductFromServer(id);
        
    }

    getProductFromServer(id) {
        axios.get(Links.productByIdRequest + id)
        .then(data => {console.log(data); return data;})
        .then(data => this.setState({product: data.data[0], noResult: false}));

        this.setState({noResult: true});
    }
    
    render(){
        if(this.state.noResult) {
           return <Container>"No such item :("</Container>
        }

        console.log(this.state.product);
        return (
            <Divider>
                <Image src={this.state.product.imageUrl} onError={(e) => { e.target.src = errorImage }} />
                <Table attached basic fluid definition>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                {aliases.name}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.product.name}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                {aliases.producer}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.product.producer}
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>
                                {aliases.type}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.product.type}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                {aliases.price}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.product.price}.00$
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell>
                                {aliases.amount}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.product.amount}
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Divider>
        );

    }
}

export default Product;