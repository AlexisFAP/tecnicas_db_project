const mongoose = require('mongoose');

const AmenitiesRoomScheme = new mongoose.Schema(
    {
        hotel_id:{
            type:String,
        },
        room_number:{
            type:Number,
        },
        amenity_name:{
            type:String,
        },
        description:{
            type:String,
        },
        cost:{
            type:Number,
        }
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

AmenitiesRoomScheme.index({room_number:1, hotel_id:1}, {unique:true});

module.exports = mongoose.model('amenities_room',AmenitiesRoomScheme);