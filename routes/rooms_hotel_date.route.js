const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/hotel/rooms_hotel_date.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/hotel/rooms_hotel_date.validator');

router.get('/:id/:date', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;