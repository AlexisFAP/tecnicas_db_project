const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/hotel/amenities_room.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/hotel/amenities_room.validator');

router.get('/:id/:room_number', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;