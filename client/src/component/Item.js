import  React,{Component} from 'react';
import axios from 'axios';
import Links from '../links';
import Buttons from './Buttons';
import PageContent from './PageContent';
import queryString from 'query-string';

class Item extends Component {
    state = {
        data: [],
        request: '',
        currentPageNumber: 1,
        maxNumberOfPages: 0
    }

    parsePageNumber(search) {
        return queryString.parse(search).page;
    }

    componentDidMount() {
        let parsed = this.parsePageNumber(this.props.location.search);
        //this clunky piece of code try to deal with async updating of props   
        let page = 1;
        if(parsed !== undefined) {
            page = parsed;
        }

        //if(this.state.currentPageNumber !== 1){
        //     while (parsed === this.state.currentPageNumber) {
        //         parsed = this.parsePageNumber(this.props.location.search);
        //     }
        // }

        this.setState({request: this.props.request, currentPageNumber: page}, async () => {
            this.getItemDataFromServer(Links.itemsPath + this.props.request + '/page/' + page);
        });
    }

    componentWillReceiveProps() {

        this.componentDidMount();
    }

    c

    transformItemDataIntoArray(data) {
        if(data.data === undefined) {
          return [];
        }
        return data.data.docs;
      }

      pageQuery(page) {
        return this.state.request + '?page=' + page;
      }
    
    getItemDataFromServer(path) {
        console.log(path);
    
        axios.get(path )
        .then(data => {console.log(data); return data;})
        .then(data_ => {this.setState({data: this.transformItemDataIntoArray(data_), maxNumberOfPages: this.getMaxNumberOfPages(data_) })});   
    
      }

      getMaxNumberOfPages(data) {
        if(data !== undefined)
            return data.data.pages;
        return 0;
      }

    render() {
        if(this.state.data === undefined) {
            return <div>something is no yes</div>;
        }

        return ( 
            <div>
            { PageContent(this.state.data)}
            <br/>
        <Buttons maxNumberOfPages={this.state.maxNumberOfPages} request={this.state.request}/>

        
        </div>
        )
    }


}

export default Item;
