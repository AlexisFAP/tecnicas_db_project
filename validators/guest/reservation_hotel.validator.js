const { check } = require('express-validator');
const validateResults = require('../../utils/handleValidator');

const validatorCreateItem = [
    check("confirm_number").exists().notEmpty(),
    check("hotel_id").exists().notEmpty(),
    check("start_date").exists().notEmpty(),
    check("end_date").exists().notEmpty(),
    check("room_number").exists().notEmpty(),
    check("guest_id").exists().notEmpty().isLength(10),
    (req, res, next) => {return validateResults(req, res, next)}
];

const validatorGetItem = [
    check("hotel_id")
    .exists()
    .notEmpty(),
    check("date")
    .exists()
    .notEmpty(),
    check("guest_id")
    .exists()
    .notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

module.exports = { validatorCreateItem, validatorGetItem };