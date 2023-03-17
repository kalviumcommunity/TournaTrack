const mongoose = require('mongoose');

const playerData = new mongoose.Schema({
  team_name:{
    type:String,
    required: true
  },
  captain:{
    type:String,
    required: true
  },
  contact:{
    type:Number,
    required: true
  },
  payment:{
    type:String,
   
  },
  player_name:{
    type:String
  }

})
const Player = mongoose.model('PLAYER', playerData);
module.exports = Player;