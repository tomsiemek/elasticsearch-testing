const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosastic = require('mongoosastic');

const ItemObject = require('./ItemObject')

const elasticsearchURI = require('../config/keys').elasticsearchUri;


const ItemSchema = new Schema(new ItemObject( 
    { 
    type: String,
    required: true,
    es_indexed: true
    },
    { 
    type: String,
    required: true,
    es_indexed: true
    }, 
    { 
    type: String,
    required: true,
    es_indexed: true
    }
));
ItemSchema.plugin(mongoosastic,{hosts:[elasticsearchURI]});

module.exports = Item = mongoose.model('item', ItemSchema);
