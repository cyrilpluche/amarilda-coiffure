const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    member_firstname: {
        type: String,
        trim: true,
        required: [true, 'Firstname is required']
    },
    member_lastname: {
        type: String,
        trim: true,
        required: [true, 'Lastname is required']
    },
    member_age: {
        type: Number,
        trim: true,
        min: [0, 'Age lower than 0'],
        max: 100,
        required: [true, 'Age is required']
    }
});

module.exports = mongoose.model('Member', memberSchema)
