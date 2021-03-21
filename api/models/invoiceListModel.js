'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the item'
    },
    store: {
        type: String,
        required: 'Kindly enter the name of the store'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    warranty_exp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);
