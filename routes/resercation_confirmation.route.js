const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/guest/reservation_confirmation.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators/guest/reservation_confirmation.validator');

router.get('/:num', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;