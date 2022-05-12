const mongoose = require('mongoose');

const ReservationHotelScheme = new mongoose.Schema(
    {
        hotel_id:{
            type:String,
        },
        start_date:{
            type:Date,
        },
        room_number:{
            type:Number,
        },
        end_date:{
            type:Date,
        },
        confirm_number:{
            type:String,
        },
        guest_id:{
            type:String,
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

ReservationHotelScheme.index({hotel_id:1, start_date:1}, {unique:true});

module.exports = mongoose.model('reservation_hotel',ReservationHotelScheme);
