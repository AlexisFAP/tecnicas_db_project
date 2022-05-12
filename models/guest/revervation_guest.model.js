const mongoose = require('mongoose');

const ReservationGuestScheme = new mongoose.Schema(
    {
        guest_last_name:{
            type:String,
        },
        guest_id:{
            type:String,
        },
        confirm_number:{
            type:String,
        },
        hotel_id:{
            type:String,
        },
        start_date:{
            type:Date,
        },
        end_date:{
            type:Date,
        },
        room_number:{
            type:Number,
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('reservation_guest',ReservationGuestScheme);
