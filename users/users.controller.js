const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({message : "User create successfully"}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({message : "User update successfully"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({message : "User delete successfully"}))
        .catch(err => next(err));
}