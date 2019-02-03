const express = require('express');
const router = express.Router();
const hotelService = require('./hotel.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function create(req, res, next) {
    hotelService.create(req.body)
        .then(() => res.json({message : "Hotel create successfully"}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    hotelService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function update(req, res, next) {
    hotelService.update(req.params.id, req.body)
        .then(() => res.json({message : "Hotel update successfully"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    hotelService.delete(req.params.id)
        .then(() => res.json({message : "Hotel delete successfully"}))
        .catch(err => next(err));
}