const mongoose = require('mongoose');

const tournamentData = new mongoose.Schema({
    tournament_name:{
        type:String,
        required: true
    },
    organiser_name:{
        type:String,
        required:true
    },
    Sports:{
        type:String,
        required:true
    },
    entry_fees:{
        type:Number,
        required:true
    },
    email:{
        type:String
    },
    contact:{
        type:Number,
        required:true
    },
    start_date:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    upiQr:{
        type:String,
    },
    upinumber:{
        type:Number
    },
    participents:{
        type:Array,
        default:[]
    },
    rules:{
     type:Array
    },
   image:{
    type:String,
    
   }
})
const Tournament = mongoose.model('TOURNAMENT', tournamentData);
module.exports = Tournament;