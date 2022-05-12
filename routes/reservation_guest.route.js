const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/guest/reservation_guest.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators//guest/reservation_guest.validator');

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;