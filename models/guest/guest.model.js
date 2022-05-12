const mongoose = require('mongoose');

const GuestScheme = new mongoose.Schema(
    {
        guest_id:{
            type:String,
        },
        first_name:{
            type:String,
        },
        last_name:{
            type:String,
        },
        title:{
            type:String,
        },
        emails:{
            type:[String],
        },
        phone_numbers:{
            type:[String],
        },
        address:{
               type:[
                {
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
               ] 
        },
    },
    {
        timestamps:false,
        versionKey:false,
    }
)

module.exports = mongoose.model('guest',GuestScheme);
