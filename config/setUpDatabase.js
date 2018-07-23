//setting up our via HTTP requests
const fetch = require('node-fetch');
const Item = require("../models/ItemObject");

const requestURI = 'http://localhost:5000/items';

const itemsURI = "/items";

var faker = require('faker');

function deleteHeader() {
    return {
        method: 'delete'
      };
}

function deleteRecords(records) {
    for(let i = 0; i < records.length; i++) {
        fetch(requestURI + records[i].id, deleteHeader())
        .then(resp => resp.json())
        .catch(e => console.log(e));
    }
}
function clearDB() {
    fetch(requestURI)
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
            faker.image.technics(),
            faker.random.number() ));
        
    }
}

//clearDB();
 const numberOfProducts = 60;
 addRandomItems(numberOfProducts, 'tv');
addRandomItems(numberOfProducts, 'phone');
addRandomItems(numberOfProducts, 'watch');


