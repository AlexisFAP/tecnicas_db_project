const { check } = require('express-validator');
const validateResults = require('../../utils/handleValidator');

const validatorCreateItem = [
    check("hotel_id").exists().notEmpty(),
    check("start_date").exists().notEmpty(),
    check("end_date").exists().notEmpty(),
    check("room_number").exists().notEmpty(),
    check("is_avaible").exists().notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

const validatorGetItem = [
    check("date")
    .exists()
    .notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

module.exports = { validatorCreateItem, validatorGetItem };