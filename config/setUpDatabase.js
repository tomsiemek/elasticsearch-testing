//setting up our via HTTP requests
const fetch = require('node-fetch');
const Item = require("../models/ItemObject");
const axios = require('axios');

const requestURI = 'http://localhost:5000/items/tempAddItem';

const itemsURI = "/items";

var faker = require('faker');

const imageSrc = "https://picsum.photos/300/200?image=";

function randomNumber(max) {
    return Math.floor((Math.random() * max) + 1);
} 


function deleteHeader() {
    return {
        method: 'delete'
      };
}

function deleteRecords(records) {
    for(let i = 0; i < records.length; i++) {

        console.log(records[i]);

        // fetch(requestURI + '/' + records[i]._id, deleteHeader())
        axios.delete(requestURI + '/' + records[i]._id)
        .then(resp => resp.json())
        .catch(e => console.log(e));
    }
}
function clearDB() {
    fetch(requestURI)
        .then(data => data.json())
        .then(data => { deleteRecords(data) })
        .catch(e => console.log(e))
}

function postHeader() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };
}

function postObject(item) {
    return {
        method: 'POST',
        headers: postHeader(),
        body: JSON.stringify(item)
    };
}

function addToDB(item) {

    fetch(requestURI, postObject(item))
        .then(data => console.log(data))
        .catch(e => console.log(e))
}

function addProducts(item, amount) {
    for(let i = 0; i < amount;i++) {
    addToDB(new Item(item.name + i, item.type, item.producer));
    }
}

function addRandomItems(amount, type) {
    for(let i = 0; i < amount;i++) {
        addToDB(new Item( 
            faker.commerce.productName(),
            type,
            faker.company.companyName(),
            faker.commerce.price(),
            imageSrc + randomNumber(20),
            faker.random.number() ));
        
    }
}

// clearDB();

 const numberOfProducts = 60;
addRandomItems(numberOfProducts, 'tv');
addRandomItems(numberOfProducts, 'phone');
addRandomItems(numberOfProducts, 'watch');


