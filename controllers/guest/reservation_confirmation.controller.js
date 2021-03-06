const { reservationConfirmationModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItem = async (req, res) => {
    try {
        const { num } = req.params;
        const data = await reservationConfirmationModel.find({confirm_number:num});
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await reservationConfirmationModel.create(body);
        res.send({data})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

module.exports = { createItem, getItem };