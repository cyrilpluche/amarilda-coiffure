const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    shift: [{ label: String, is_free: Boolean }],
    date: {
        type: Date,
        required: [true, 'Date is required']
    }
});

module.exports = mongoose.model('Schedule', scheduleSchema)
