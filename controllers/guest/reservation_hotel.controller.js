const { reservationHotelModel } = require('../../models');
const { matchedData } = require('express-validator')

const getItem = async (req, res) => {
    try {
        const { hotel_id, date, guest_id } = req.params;
        const data = await reservationHotelModel.find({$and:[{hotel_id:hotel_id},{start_date: {$lt:date}}, {end_date: {$gte:date}},{guest_id:guest_id}]})
        res.send({data});
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}


const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await reservationHotelModel.create(body);
        res.send({data})
    } catch (e) {
        console.log(e);
        res.send(e)
    }
}

module.exports = { createItem,getItem };