const express = require('express');
const router = express.Router();
const { getItemNum , getItemHFN, createItem } = require('../controllers/guest/reservation_confirmation.controller');
const { validatorCreateItem, validatorGetItemNum, validatorGetItemHFN } = require('../validators/guest/reservation_confirmation.validator');

router.get('/:num', validatorGetItemNum, getItemNum);

router.get('/:hotel/:date/:id_guest', validatorGetItemHFN, getItemHFN);

router.post('/', validatorCreateItem, createItem);

module.exports = router;