const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    rating: { type: Number, min: 0, max: 10 },
    imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('galeria', itemSchema);







