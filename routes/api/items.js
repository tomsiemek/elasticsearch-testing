const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');
const ItemObject = require('../../models/ItemObject');
var mongoosePaginate = require('mongoose-paginate');

const expressJsonValidate = require('express-jwt');
const secretKey = require('../../config/keys').secretKey;

const JsonWebTokenMiddleware = expressJsonValidate({secret: secretKey});


const pageLimit = 10;

//getting all items
router.get('/',JsonWebTokenMiddleware, (req,res) => {
    console.log("GET REQUEST " + new Date().toLocaleString());
    Item.find()
        .then(items => res.json(items))
        .catch(e => console.log(e));
}); // already on api/items

router.get('/id/:id', (req,res) => {
    console.log("GET REQUEST ID: " + req.params.id + ' ' + new Date().toLocaleString());
    Item.find({_id: req.params.id})
        .then(items => res.json(items));
});


router.get('/type/:type', (req,res) => {
    console.log("GET REQUEST TYPE " + new Date().toLocaleString());
    Item.find({type:  req.params.type})
        .sort({ name: 1})
        .then(items => res.json(items));

});

router.get('/type/:type/page/:page', (req, res) => {
    console.log("GET REQUEST TYPE PAGE " + req.params.page  + " " + new Date().toLocaleString());
    Item.paginate({type: req.params.type}, { page: req.params.page, limit: pageLimit })
    .then(items => res.json(items));   

});

router.post('/',JsonWebTokenMiddleware, (req,res) => {

    console.log("POST REQUEST " + new Date().toLocaleString());
    console.log(req.body);
    
    const newItem = new Item( (new ItemObject(req.body.name, req.body.type, req.body.producer,req.body.price, req.body.imageUrl, req.body.amount)));

    newItem.save().then(item => res.json(item));
}); // already on api/items

router.get('/search/:id', (req,res) => {
    console.log("SEARCH REQUEST " + new Date().toLocaleString());
    var query = {
        
        match: {
            name: {
                query: req.params.id,
                fuzziness: 2
            }
        }
    }

    console.log(query);
    Item.search(query, (err,results) => {
        if(err) {
            console.log(err);
        }

        else {
            return res.json(results);
        }

    }); 
}); 


//deleting item of a given id
router.delete('/:id', (req,res) => {
    console.log("DELETE REQUEST: " + req.params.id)
    Item.findByIdAndRemove(req.params.id)
        .then(() => res.json({sucess:true}))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;