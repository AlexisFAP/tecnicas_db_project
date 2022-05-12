const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/hotel/hotels.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/hotel/hotel.validator');

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;