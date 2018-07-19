import React from 'react';

const Row = (props) => {

    let name = props.name;
    let producer = props.producer;
    if(name == null)
        name = 'NO NAME :O';
    if(producer == null)
        producer = 'NO PRODUCER O.o';
    return <div>NAME: {props.name} PRODUCER: {props.producer}<br/></div>;
}

export default Row;