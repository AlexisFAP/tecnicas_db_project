const mongoose = require('mongoose');

const RoomsHotelDateScheme = new mongoose.Schema(
    {
        hotel_id:{
            type:String,
            unique:true,
        },
        date:{
            type:Date,
        },
        room_number:{
            type:Number,
        },
        is_avaible:{
            type:Boolean,
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('rooms_hotel_date',RoomsHotelDateScheme);