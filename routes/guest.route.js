const express = require('express');
const router = express.Router();
const { getItem, createItem } = require('../controllers/guest/guest.controller');
const { validatorCreateItem, validatorGetItem } = require('../validators//guest/guest.validator');

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

module.exports = router;