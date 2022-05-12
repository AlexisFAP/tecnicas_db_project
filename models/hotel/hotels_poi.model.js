const mongoose = require('mongoose');

const HotelPoiScheme = new mongoose.Schema(
    {
        poi_name:{
            type:String,
            unique:true,
        },
        hotel_id:{
            type:String,
        },
        name: {
            type:String,
        },
        phone: {
            type:String,
        },
        address: {
            street:{
                type:String
            },
            street_number:{
                type:String
            },
            complement:{
               type:String
           },
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('hotels_poi',HotelPoiScheme);