const mongoose = require('mongoose');

const ReservationConfirmationScheme = new mongoose.Schema(
    {
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
        guest_id:{
            type:String,
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('reservation_confirmation',ReservationConfirmationScheme);
