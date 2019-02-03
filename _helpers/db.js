const mongoose = require('mongoose');
if(process.env.MONGODB_URI) {
 mongoose.connect(process.env.MONGODB_URI);
}else {
 db = 'mongodb://localhost/hotel';
 mongoose.connect(db, function(err){
  if(err){
   console.log(err);
  }else {
   console.log('mongoose connection is successful on: ' + db);
  }
 });
}

mongoose.Promise = global.Promise;

module.exports = {
    Hotel: require('../hotels/hotel.model'),
    User: require('../users/user.model'),
    Room: require('../rooms/room.model'),
    ObjectId : require('mongoose').Types.ObjectId,
};