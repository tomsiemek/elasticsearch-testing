import React, {Component} from 'react';
import {Container, Image, Segment, Icon, Header, Label, Button, Divider, ButtonGroup} from 'semantic-ui-react';
import axios from 'axios';
import Links from '../links';
import queryString from 'query-string';
import errorImage from '../images/sadFace.png';


const DeleteButton = () => {
    return (<Button color='red'>
    DELETE
    </Button>);
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
    
    render() {
        if (this.state.noResult) {
            return <Container>"No such item :("</Container>
        }

        console.log(this.state.product);
        return (
            <Container className='center aligned' text>
                <Segment.Group horizontal>
                    <Segment>
                        <Image src={this.state.product.imageUrl} fluid onError={(e) => { e.target.src = errorImage }} />
                    </Segment>
                    <Segment>
                        <Header as='h1' textAlign='left'>
                            {this.state.product.name}
                        </Header>
                        <Header as='h4' textAlign='left' color='grey'>
                            {this.state.product.producer}
                        </Header>
                        <Header as='h4' textAlign='left'>
                            <Icon name='group' />
                            {this.state.product.amount}
                        </Header>
                        <Header as='h4' textAlign='left'>
                            <Icon name='dollar sign' />
                            {this.state.product.price}.00
                        </Header>
                        <Header as='h3' textAlign='left'>
                            <Label class='left aligned' tag>
                                {this.state.product.type}
                            </Label>
                            <Button.Group floated='right'>
                                <DeleteButton/>
                                </Button.Group>       
                        </Header>


                    </Segment>
                </Segment.Group>
            </Container>
        );

    }
}

export default Product;