const mongoose = require('mongoose');

const DayItemSchema = mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    timeStart: { type: Date, required: true },
    timeEnd: { type: Date, required: false },
    planningId: { type: Number, required: true }
});

module.exports = mongoose.model('DayItem', DayItemSchema);