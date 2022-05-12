const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/guest/reservation_hotel.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/guest/reservation_hotel.validator');


router.get('/:hotel_id/:date/:guest_id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;