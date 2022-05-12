const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/hotel/hotels_poi.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/hotel/hotel_poi.validator');

router.get('/:poi_name', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;