import React, {Component} from 'react';
import {Container, Input, Button, Segment} from 'semantic-ui-react';
import aliases from '../aliases';
import axios from 'axios';
import Links from '../links';

const maxInputLength = 20;
const maxNumber = 999999;
const minNumber = 0;

const InputField = (props) => {
    return (
        <Input placeholder={props.name} type={props.type} size='massive' transparent onChange={(e) => props.handleChange(e.target.value)}/>
    );
}

class AddNewItem extends Component {

    constructor(props) {
        super(props);

        this.updateAmount = this.updateAmount.bind(this);
        this.updateImgUrl = this.updateImgUrl.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateProducer = this.updateProducer.bind(this);
        this.updateType = this.updateType.bind(this);
        this.sendToServer = this.sendToServer.bind(this);
        this.checkValidity = this.checkValidity.bind(this);
        this.transformToBody = this.transformToBody.bind(this);
        this.submit = this.submit.bind(this);

    }
    state = {
        name: '',
        type: '',
        producer: '',
        amount: 0,
        price: 0,
        imageUrl: ''
    }

    updateName(value) {
        this.setState({name: value});
    }

    updateType(value) {
        this.setState({type: value});
    }

    updateProducer(value) {
        this.setState({producer: value});
    }

    updateAmount(value) {
        this.setState({amount: value});
    }

    updateImgUrl(value) {
        this.setState({imageUrl: value});
    }

    updatePrice(value) {
        this.setState({price: value});
    }

    transformToBody() {
        return this.state;
    }

    sendToServer() {
        axios.post(Links.addRequest, this.transformToBody())
        .then( () => console.log("Success"))
        .catch(error => console.log(error));
    }

    checkText(text) {
        if( ! /^[a-zA-Z0-9]+$/.test(text)) {
            return false;
        }

        if(text.length > maxInputLength) {
            return false;
        }

        return true;
    }

    checkNumber(number) {
        if(number > maxNumber) {
            return false;
        }

        if(number < minNumber) {
            return false;
        }

        return true;
    }

    checkUrl(url) {
        //src: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
        let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?'+ // port
            '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
            '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(url);
    }

    checkValidity () {
        if(! this.checkText(this.state.name)) {
            return false;
        }

        if(! this.checkText(this.state.producer)) {
            return false;
        }

        if(! this.checkText(this.state.type)) {
            return false;
        }

        if(! this.checkNumber(this.state.amount)) {
            return false;
        }

        if(! this.checkNumber(this.state.price)) {
            return false;
        }

        if(! this.checkUrl(this.state.imageUrl)) {
            return false;
        }

        return true;
    }

    informUserAboutFormError() {
        console.log("Form input error!")
    }

    submit() {
        if(this.checkValidity()) {
            this.sendToServer();
            return;
        }

        this.informUserAboutFormError();


    }

    render() {
        return (
            <Container className='center aligned grid'>
                <Segment>
                    <InputField name={aliases.name} type='text' handleChange={this.updateName} /><br />
                    <InputField name={aliases.type} type='text'  handleChange={this.updateType} /><br />
                    <InputField name={aliases.producer} type='text'  handleChange={this.updateProducer} /><br />
                    <InputField name={aliases.amount} type='number'  handleChange={this.updateAmount} /><br />
                    <InputField name={aliases.price} type='number'  handleChange={this.updatePrice} /><br />
                    <InputField name={aliases.imgUrl} type='url'  handleChange={this.updateImgUrl} /><br />
                    <Button onClick={this.submit}> Add </Button>
                </Segment>
            </Container>
        );

    }
}

export default AddNewItem;