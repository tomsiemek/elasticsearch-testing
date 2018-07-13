const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemObject = require('./ItemObject')


const ItemSchema = new Schema(new ItemObject( 
    { 
    type: String,
    required: true
    },
    { 
    type: String,
    required: true
    }, 
    { 
    type: String,
    required: true 
    }
));


module.exports = Item = mongoose.model('item', ItemSchema);
