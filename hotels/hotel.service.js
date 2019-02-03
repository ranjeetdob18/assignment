const db = require('../_helpers/db')
const Hotel = db.Hotel;
const ObjectId = db.ObjectId;

module.exports = {
    getAll,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Hotel.find();
}

async function create(hotelParam) {
    const hotel = new Hotel(hotelParam);
    // save user
    await hotel.save();
}

async function update(id, hotelParam) {
     if(ObjectId.isValid(id)){
        const hotel = await Hotel.findById(id);
        // validate
        if (!hotel) throw 'Hotel not found';
        // copy hotelParam properties to user
        Object.assign(hotel, hotelParam);
        await hotel.save();
    }else{
         throw `Invalid id`;
    }
}

async function _delete(id) {
    if(ObjectId.isValid(id)){
        const hotel = await  Hotel.findByIdAndRemove(id);
        if (!hotel) throw 'Hotel not found';
    }else{
         throw `Invalid id`;
    }
}