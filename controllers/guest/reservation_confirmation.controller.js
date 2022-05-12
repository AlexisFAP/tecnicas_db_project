const { reservationConfirmationModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItemNum = async (req, res) => {
    try {
        const { num } = req.params;
        const data = await reservationConfirmationModel.find({confirm_number:num});
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

const getItemHFN = async (req, res) => {
    try {
        const { hotel, date, id_guest } = req.params;
        const data = await reservationConfirmationModel.find({$and:[{hotel_id:hotel},{start_date: {$gte:date}},{guest_id:id_guest}]})
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

module.exports = { createItem,getItemHFN, getItemNum };