const mongoose = require('mongoose');

const PoiHotelScheme = new mongoose.Schema(
    {
        hotel_id:{
            type:String,
            unique:true,
        },
        poi_name:{
            type:String,
        },
        description:{
            type:String,
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('poi_hotels',PoiHotelScheme);