const UserObject = require('./UserObject');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const User = new Schema( new UserObject(
    {
        type: String,
        unique: true,
        required: true
    },
    {
        type: String,
        required: true
    }
) );

module.exports = user = mongoose.model('user', User);