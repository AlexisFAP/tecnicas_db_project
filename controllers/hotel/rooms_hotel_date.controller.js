const { roomHotelDateModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItem = async (req, res) => {
    try {
        const { date } = req.params;
        const data = await roomHotelDateModel.find({$and:[{start_date: {$lt:date}}, {end_date: {$gte:date}}]});
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await roomHotelDateModel.create(body);
        res.send({data})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

module.exports = { getItem,createItem };