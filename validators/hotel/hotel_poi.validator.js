const { check } = require('express-validator');
const validateResults = require('../../utils/handleValidator');

const validatorCreateItem = [
    check("poi_name").exists().notEmpty(),
    check("hotel_id").exists().notEmpty(),
    check("name").exists().notEmpty(),
    check("phone").exists().notEmpty(),
    check("address").exists().notEmpty(),
    check("address.street").exists().notEmpty(),
    check("address.street_number").exists().notEmpty(),
    check("address.complement").exists().notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

const validatorGetItem = [
    check("poi_name")
    .exists()
    .notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

module.exports = { validatorCreateItem, validatorGetItem };