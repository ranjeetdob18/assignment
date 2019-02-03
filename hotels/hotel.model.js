const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const location = new Schema ({
	type : String,
	coordinates : [],
	_id : 0
});
const schema = new Schema({
    name : { type: String, required: true },
    image : { type: String },
    contact : { type: Number },
    description : { type: String },
    address : { type: String },
    location : location,
    createdDate : { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Hotel', schema);