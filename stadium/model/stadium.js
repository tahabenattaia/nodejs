const mongoose = require('mongoose');

const stadiumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    capacity: Number
});

module.exports = mongoose.model('Stadium', stadiumSchema);
