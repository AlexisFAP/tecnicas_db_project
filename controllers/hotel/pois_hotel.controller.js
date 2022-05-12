const { poiHotelModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await poiHotelModel.find({hotel_id:id});
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await poiHotelModel.create(body);
        res.send({data})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

module.exports = { getItem,createItem };