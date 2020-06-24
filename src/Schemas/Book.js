const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: String,
    subject: String 
});

module.exports = mongoose.model('Book', BookSchema);