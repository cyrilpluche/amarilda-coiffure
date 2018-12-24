const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prestationSchema = new Schema({
    prestation_title: {
        type: String,
        trim: true,
        required: [true, 'Title is required']
    },
    prestation_description: {
        type: String,
        trim: true,
    },
    prestation_price: {
        type: Number,
        min: [0, 'Price lower than 0'],
        required: [true, 'Price is required']
    },
    prestation_reduction: {
        type: Number,
        min: [0, 'Reduction lower than 0']
    },
    category_name: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Prestation', prestationSchema)
