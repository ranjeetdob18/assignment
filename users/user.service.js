const db = require('../_helpers/db')
const User = db.User;
const ObjectId = db.ObjectId;

module.exports = {
    getAll,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await User.find();
}

async function create(userParam) {
    // validate
    if (await User.findOne({ email: userParam.email })) {
        throw `Eamil ${userParam.email} is already exist`;
    }
    const user = new User(userParam);
    // save user
    await user.save();
}

async function update(id, userParam) {

    if(ObjectId.isValid(id)){
        const user = await User.findById(id);
        // validate     
        if (!user) throw 'User not found';
        if (user.email !== userParam.email && await User.findOne({ email: userParam.email })) {
            throw `Eamil ${userParam.email} is already exist`;
        }
        // copy userParam properties to user
        Object.assign(user, userParam);
        await user.save();
    }else{
         throw `Invalid id`;
    }
}

async function _delete(id) {
    if(ObjectId.isValid(id)){
        const user = await  User.findByIdAndRemove(id);
        if (!user) throw 'User not found';
    }else{
         throw `Invalid id`;
    }
}