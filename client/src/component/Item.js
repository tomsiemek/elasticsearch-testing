import React, {Component} from 'react';
import Links from '../links';
import PageButton from './PageButton';
import Row from './Row';

class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            currentPage: 1,
            httpRequest: this.props.httpRequest
        }

        this.updatePageNumber = this.updatePageNumber.bind(this);
    }

    loadPage(pageNumber) {
        fetch(Links.itemsPath + this.state.httpRequest + '/page/' + pageNumber)
        .then(data => data.json())
        .then(data__ => {this.setState({data: data__}); return data__;})
        .then(data_ => console.log(data_))
        .catch(e => console.log(e));
    }

    componentDidMount() {
        this.loadPage(1);
        
    }

    showData(){
        if(this.state.data.docs == null) {
            return (<div>NO DATA :(</div>)
        }

        return this.state.data.docs.map( (item,key) => (
            <Row name={item.name} producer={item.producer}/>
        ));
    }

    showButtons() { 
        var arr = [this.state.data.pages];
        for(let i = 0; i < this.state.data.pages; i++)
            arr[i] = i+1;
        return arr.map((item) => <PageButton number={item} onClick={ () => {this.updatePageNumber(item)} } />)
    }

    updatePageNumber(newNumber) {
        console.log("updating PAGE!!!!");
        this.loadPage(newNumber);
    }



    render() {
            return(
            <div>
                
                {this.showData()} 
                {this.showButtons()} 
            

            </div>);
        
        
        
    }
}

export default Item;