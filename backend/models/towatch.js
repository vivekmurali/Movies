const mongoose = require('mongoose');

const towatchSchema = mongoose.Schema({
    name: String,
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('towatch', towatchSchema);