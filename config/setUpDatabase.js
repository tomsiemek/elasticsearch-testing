//setting up our via HTTP requests
const fetch = require('node-fetch');
const Item = require("../models/ItemObject");

const requestURI = 'http://localhost:5000/api/items';


function deleteHeader() {
    return {
        method: 'delete'
      };
}

function deleteRecords(records) {
    for(let i = 0; i < records.length; i++) {
        fetch('/api/items/' + records[i].id, deleteHeader())
        .then(resp => resp.json())
        .catch(e => console.log(e));
    }
}
function clearDB() {
    fetch('/api/items')
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

//clearDB();
const numberOfProducts = 20;

let producer = "ALM Factory";

let tvs = new Item("TV", "TV", producer);
let phones = new Item("PHONE", "PHONE", producer);
let watches = new Item("WATCH", "WATCH", producer);

addProducts(tvs,numberOfProducts);
addProducts(phones,numberOfProducts);
addProducts(watches,numberOfProducts);



