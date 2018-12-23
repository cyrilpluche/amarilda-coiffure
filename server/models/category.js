const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_title: {
        type: String,
        trim: true,
        required: [true, 'Title is required']
    },
    category_description: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('Category', categorySchema)
