const mongoose = require('mongoose');

const HotelScheme = new mongoose.Schema(
    {
        hotel_id: {
            type:String,
            unique:true,
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

module.exports = mongoose.model('hotels', HotelScheme);