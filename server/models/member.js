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
    member_date_of_birth: {
        type: Number,
        trim: true,
        min: [1900, 'Date of birth not valid'],
        required: [true, 'Date of birth is required']
    },
    member_status: {
        type: Number,
        trim: true,
        min: [0, 'Status lower than 0'],
        required: [true, 'Status is required']
    },
    member_email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    member_password: {
        type: String,
        trim: true,
        required: [true, 'Password is required']
    }
});

module.exports = mongoose.model('Member', memberSchema)
