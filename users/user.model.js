const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    fullName : { type: String, required: true },
    mobile : { type: Number, required: true },
    email : { type: String },
    createdDate : { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);