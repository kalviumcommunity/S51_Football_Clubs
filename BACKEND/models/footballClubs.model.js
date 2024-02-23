const mongoose = require('mongoose');

const FootballClubSchema = new mongoose.Schema({
    SerialNumber:{type : Number},
    ClubId:{type : Number,unique : true},
    ClubName:{type : String},
    Ranking:{type : Number},
    Coach:{type:String},
    MatchsPlayed:{type:Number},
    Won:{type:Number},
    Losses:{type:Number},
    Goals:{type:Number},
    GoalsConceded:{type:Number},
    CleanSheet:{type:Number},
    Shots:{type:Number},
    Shotsontarget:{type:Number},
    Yellowcards:{type:Number},
    Redcards:{type:Number},
    Fouls:{type:Number},
    Offsides:{type:Number}
},
{
    timestamps: true
});

module.exports = mongoose.model("footballcLubs", FootballClubSchema);