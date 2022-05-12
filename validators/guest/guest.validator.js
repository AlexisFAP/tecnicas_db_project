const { check } = require('express-validator');
const validateResults = require('../../utils/handleValidator');

const validatorCreateItem = [
    check("guest_id").exists().notEmpty().isLength(10),
    check("first_name").exists().notEmpty(),
    check("last_name").exists().notEmpty(),
    check("title").exists().notEmpty(),
    check("emails").exists().notEmpty().isArray(),
    check("phone_numbers").exists().notEmpty().isArray(),
    check("address").exists().notEmpty().isArray(),
    check("address.*.street").exists().notEmpty(),
    check("address.*.street_number").exists().notEmpty(),
    check("address.*.complement").exists().notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {return validateResults(req, res, next)}
];

module.exports = { validatorCreateItem, validatorGetItem };