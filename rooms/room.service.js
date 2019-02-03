const db = require('../_helpers/db')
const Room = db.Room;
const ObjectId = db.ObjectId;

module.exports = {
    getAll,
    create,
    availability,
    booking,
    update,
    delete: _delete
};

async function getAll() {
    return await Room.find();
}

async function create(roomParam) {
    const room = new Room(roomParam);
    // save room
    await room.save();
}
// this will fetch all the available room with hotel for a date range provided by users
async function availability(roomParam) {
   return await Room.find({
        reserved: {  
              $not: {
                $elemMatch: {from: {$lt: new Date(roomParam.to)}, to: {$gt: new Date(roomParam.from)}}
            }
        }
    }).populate("hotel_id");
}

// booking of a room for specific date range proviced by users
async function booking(roomParam) {
   const room = await Room.findByIdAndUpdate(roomParam._id, {
        $push: {reserved: roomParam.reserved}
    }, {
        new: true
    });
}

async function update(id, roomParam) {
    if(ObjectId.isValid(id)){
        const room = await Room.findById(id);
        // validate
        if (!room) throw 'Room not found';
        // copy roomParam properties to user
        Object.assign(room, roomParam);
        await room.save();
    }else{
         throw `Invalid id`;
    }
}

async function _delete(id) {
    if(ObjectId.isValid(id)){
        const room = await  Room.findByIdAndRemove(id);
        if (!room) throw 'Room not found';
    }else{
         throw `Invalid id`;
    }
}