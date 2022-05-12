const { reservationGuestModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItem = async (req, res) => {
    try {
        const { name } = req.params;
        const data = await reservationGuestModel.find({guest_last_name:name});
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await reservationGuestModel.create(body);
        res.send({data})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

module.exports = { getItem,createItem };