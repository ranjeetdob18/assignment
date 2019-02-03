const express = require('express');
const router = express.Router();
const roomService = require('./room.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);
router.post('/availability',availability);
router.post('/reserve',booking);

module.exports = router;


function create(req, res, next) {
    roomService.create(req.body)
        .then(() => res.json({message : "Room create successfully"}))
        .catch(err => next(err));
}

function availability(req, res, next) {
    roomService.availability(req.body)
        .then((rooms) => res.json(rooms))
        .catch(err => next(err));
}

function booking(req, res, next) {
    roomService.booking(req.body)
        .then(() => res.json({message : "Room book successfully"}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    roomService.getAll()
        .then(rooms => res.json(rooms))
        .catch(err => next(err));
}

function update(req, res, next) {
    roomService.update(req.params.id, req.body)
        .then(() => res.json({message : "Room update successfully"}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    roomService.delete(req.params.id)
        .then(() => res.json({message : "Room delete successfully"}))
        .catch(err => next(err));
}