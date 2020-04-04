const mongoose = require('mongoose');

const watchedSchema = mongoose.Schema({
    name: String,
    date: {type: Date, default: Date.now()},
    rating: Number
});

module.exports = mongoose.model('watched', watchedSchema);