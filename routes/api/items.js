const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');
const ItemObject = require('../../models/ItemObject');
var mongoosePaginate = require('mongoose-paginate');



const pageLimit = 10;


//getting all items
router.get('/', (req,res) => {
    console.log("GET REQUEST " + new Date().toLocaleString());
    Item.find()
        .sort({ name: 1})
        .then(items => res.json(items));
}); // already on api/items


router.get('/:type', (req,res) => {
    console.log("GET REQUEST TYPE " + new Date().toLocaleString());
    Item.find({type:  req.params.type})
        .sort({ name: 1})
        .then(items => res.json(items));

});

router.get('/:type/:page', (req, res) => {
    console.log("GET REQUEST TYPE PAGE + " + req.params.page  + " " + new Date().toLocaleString());
    Item.paginate({type: req.params.type}, { page: req.params.page, limit: pageLimit })
    .then(items => res.json(items));   

});

router.post('/', (req,res) => {

    console.log("POST REQUEST " + new Date().toLocaleString());
    console.log(req.body);
    
    const newItem = new Item( (new ItemObject(req.body.name, req.body.type, req.body.producer)));

    newItem.save().then(item => res.json(item));
}); // already on api/items

//deleting item of a given id
router.delete('/:id', (req,res) => {
    console.log("DELETE REQUEST: " + req.params.id)
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({sucess:true})))
        .catch(err => res.status(404).json({success: false}));
});
module.exports = router;