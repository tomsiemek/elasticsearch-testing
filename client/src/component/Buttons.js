import React from 'react';
import PageButton from './PageButton';

const Buttons = (props) => {
    var buttons = [];
    for(let i = 0; i < props.maxNumberOfPages; i++) {
      buttons.push(i+1);
    }
    return buttons.map( (item,key) => {
      return <PageButton number = {item} request = {props.request}/>
    } )
  }

  export default Buttons;