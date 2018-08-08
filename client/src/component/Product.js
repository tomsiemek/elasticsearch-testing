import React, {Component} from 'react';
import {Container, Image, Segment, Icon, Header, Label, Button, Modal} from 'semantic-ui-react';
import axios from 'axios';
import Links from '../links';
import queryString from 'query-string';
import errorImage from '../images/sadFace.png';
import deleteItem from '../deleteItem';
import labels from '../labels';

const DeleteButton = (props) => {
    return (<Button onClick={props.onClick} color='red'>
    {labels.delete}
    </Button>);
}


class Product extends Component {


    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
        this.getId = this.getId.bind(this);
        this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    }
    state = {
        product: {},
        noResult: true,
        itemDeletedModal: false
    }


    getId() {
        let parsed = queryString.parse(this.props.location.search);
        return parsed.id;
    }
    componentDidMount() {
        this.getProductFromServer(this.getId());
        
    }

    deleteProduct() {
        deleteItem(this.getId())
        .then(() => console.log("Item deleted!"))
        .catch(e => console.log(e));
        this.setState({itemDeletedModal: true})
    }

    getProductFromServer(id) {
        axios.get(Links.productByIdRequest + id)
        .then(data => {console.log(data); return data;})
        .then(data => {
            if(data.data.length !== 0) {
                this.setState({product: data.data[0], noResult: false});
            }
        });

        this.setState({noResult: true});
    }

    handleCloseDeleteModal() {
        this.setState({itemDeletedModal: false,
            noResult: true
        })
    }
    
    render() {
        if (this.state.noResult) {
            return <Container>{labels.noItemText}</Container>
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
                            <Button.Group floated='right' attached='bottom'>
                                <Modal
                                    trigger={<DeleteButton onClick={this.deleteProduct}/>}
                                    open={this.state.itemDeletedModal}
                                    onClose={this.handleCloseDeleteModal}
                                    basic
                                    size='small'>

                                    <Modal.Content>
                                        <h3>{labels.itemDeletedMessage}</h3>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='green' onClick={this.handleCloseDeleteModal} inverted>
                                            <Icon name='checkmark' /> OK
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                                
                                </Button.Group>       
                        </Header>


                    </Segment>
                </Segment.Group>
            </Container>
        );

    }
}

export default Product;