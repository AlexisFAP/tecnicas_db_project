const { check } = require('express-validator');
const validateResults = require('../../utils/handleValidator');

const validatorCreateItem = [
    check("hotel_id").exists().notEmpty(),
    check("poi_name").exists().notEmpty(),
    check("description").exists().notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

module.exports = { validatorCreateItem, validatorGetItem };