const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosastic = require('mongoosastic');

const ItemObject = require('./ItemObject')


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
    required: true 
    }
));
ItemSchema.plugin(mongoosastic,{hosts:["172.18.0.3:9200"]});

module.exports = Item = mongoose.model('item', ItemSchema);
