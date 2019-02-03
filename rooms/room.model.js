const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    hotel_id : { type: Object, ref : 'Hotel' },
    capacity : { type: Number, required : true },
    types : { type: String, required : true},
    price : { type: Number},
    reserved: [
        {
        	user_id : { type: Object, ref : 'User' },
            from: { type: Date, required : true },
            to: { type: Date, required : true },
            bookingDate : { type: Date, default: Date.now }
        }
    ],
    createdDate : { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Room', schema);