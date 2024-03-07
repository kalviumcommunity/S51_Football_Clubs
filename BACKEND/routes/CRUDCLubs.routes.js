const express = require('express')
const getRouter = express.Router();
const postRouter = express.Router();
const putRouter = express.Router();
const deleteRouter = express.Router();
const jwt = require('jsonwebtoken');
const FootballCLubs = require("../models/footballClubs.model")
const Joi = require('joi');
const schema = Joi.object({
      serialNumber:Joi.number(),
      ClubId:Joi.number().required(),
      ClubName:Joi.string().required(),
      Ranking:Joi.number().required(),
      Coach:Joi.string().required(),
      MatchsPlayed:Joi.number().required(),
      Won:Joi.number().required(),
      Losses:Joi.number().required(),
      Goals:Joi.number().required(),
      GoalsConceded:Joi.number(),
      CleanSheet:Joi.number(),
      Shots:Joi.number(),
      Shotsontarget:Joi.number(),
      Yellowcards:Joi.number(),
      Redcards:Joi.number(),
      Fouls:Joi.number(),
      Offsides:Joi.number()
    });
    const authenticateToken = (req, res,next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]
        if(token) return res.status(401).send(token)
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
          if(err) return res.status(403).send(err);
          req.user = user
          next()
        })
      }
getRouter.get('/getallfootballclub',authenticateToken,async (req, res) => {
    try{
        const footballClubs = await FootballCLubs.find();
        res.status(200).json(footballClubs);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

getRouter.get('/getfootballclub/:id',authenticateToken,async (req, res) => {
    try{
        const footballClub = await FootballCLubs.findone({ClubName:query});
        res.status(200).json(footballClub);
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

postRouter.post('/addfootballclub',authenticateToken,async (req, res) => {

          
            const { error, value } = schema.validate(req.body, { abortEarly: false });
          

            try{
                if (!error) {
                let{serialNumber,ClubId,ClubName,Ranking,Coach,MatchsPlayed,Won,Losses,Goals,GoalsConceded,CleanSheet,Shots,Shotsontarget,Yellowcards,Redcards,Fouls,Offsides} = req.body;
                const footballClub = await FootballCLubs.create({serialNumber,ClubId,ClubName,Ranking,Coach,MatchsPlayed,Won,Losses,Goals,GoalsConceded,CleanSheet,Shots,Shotsontarget,Yellowcards,Redcards,Fouls,Offsides});
                res.status(201).json(footballClub);}
                else {
                    return res.status(400).send({
                        message: `Bad request, error:${error}`
                    })
                    console.error(error)
                }
            } catch(err){
                console.log(err);
                return res.status(500).send({
                    message: "Internal server error"
                })
            }
            
        
})

putRouter.patch('/updatefootballclub/:id',authenticateToken,async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
          
    try {
        if (!error) {
        const {id} = req.params;
        const filter ={"ClubId":Number(id)}
        let{SerialNumber,ClubName,Ranking,Coach,MatchsPlayed,Won,Losses,Goals,GoalsConceded,CleanSheet,Shots,Shotsontarget,Yellowcards,Redcards,Fouls,Offsides} = req.body;
        const footballClub = await FootballCLubs.findOneAndUpdate(filter,{SerialNumber,ClubName,Ranking,Coach,MatchsPlayed,Won,Losses,Goals,GoalsConceded,CleanSheet,Shots,Shotsontarget,Yellowcards,Redcards,Fouls,Offsides});
        res.status(200).json(footballClub);}
        else {
         return res.status(400).send({
            message: `Bad request, error:${error}`

            })
            console.error(error)
        }
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }

})

deleteRouter.delete('/deletefootballclub/:id',authenticateToken,async (req, res) => {
    try {
        const {id} = req.params;
        const filter ={"ClubId":Number(id)}
        const footballClub = await FootballCLubs.findOneAndDelete(filter);
        res.status(200).json(footballClub);
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})

module.exports = {getRouter, postRouter, deleteRouter, putRouter}
