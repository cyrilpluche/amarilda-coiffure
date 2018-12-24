const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    contact_phone: {
        type: Number,
        trim: true,
        required: [true, 'Phone is required']
    },
    contact_email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    contact_schedule: {
        type: String,
        trim: true,
        required: [true, 'Schedule is required']
    },
    contact_siret: {
        type: String,
        trim: true,
        required: [true, 'Siret is required']
    },
    contact_description: {
        type: String,
        trim: true,
        required: [true, 'Description is required']
    },
    contact_home_description: {
        type: String,
        trim: true,
    },
    contact_home_name: {
        type: String,
        trim: true,
        required: [true, 'Home name is required']
    },
});

module.exports = mongoose.model('Contact', contactSchema)
