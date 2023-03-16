const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const Tournament = require('../models/tournamentData')
const Player = require('../models/playerData')
require('../database/connection');
const User = require('../models/userSchema');
router.get('/signin', (req, res) => {
    res.send(`hello login world from server but router`);
});

//sigup
router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "please fill the required details" })
    }


    try {
        const userExist = await User.findOne({ email: email })
        console.log(userExist)
        if (userExist) {
            return res.status(422).json({ error: "email already Exist" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "password is not matching" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword })

            const userRegister = await user.save()

            if (userRegister) {
                res.status(201).json({ message: "user registraion succesfully" });
            }
            else {
                res.status(500).json({ error: "Registraion failed" })
            }
        }
    } catch (err) {
        console.log(err);
    }
})
//Login
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "please filled the data" })
        }
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "invalid user" });
            }
            else {
                res.json({ message: "user signin successfully" })
            }
        }
        else {
            res.status(400).json({ error: "invalid user" });
        }

    } catch (err) {
        console.log(err);
    }
})
//tournamentdata
router.post('/create',async(req,res) =>{
    const{ tournament_name,organiser_name,entry_fees,email,contact,start_date,state,city,pincode,upiQr,upinumber}=req.body;
    if (!tournament_name || !organiser_name || !entry_fees || !contact || !start_date || !state || !city || !pincode ) {
        return res.status(422).json({ error: "please fill the required details" })
    }
    try{
        const tournament = new Tournament({ tournament_name,organiser_name,entry_fees,email,contact,start_date,state,city,pincode,upiQr,upinumber })

        const createTournamenr = await tournament.save()
        if (createTournamenr) {
            res.status(201).json({ message: "Tournament Created" });
        }
        else {
            res.status(500).json({ error: "Try again" })
        }
    } catch (err) {
        console.log(err);
    }

})
router.get('/home', (req,res) =>{
    Tournament.find()
    .then((post)=>{
        res.json({post})
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/home/:id',(req,res)=>{
    Tournament.findOne({_id: req.params.id})
    .then((post)=>{
        res.json({post})
    })
    .catch((err)=>{
        console.log(err);
    })
})

// player data
router.post('/player', async(req,res)=>{
    const{team_name,captain,contact,payment,player_name}=req.body;
    if (!team_name || !captain||!contact || !player_name) {
        return res.status(422).json({ error: "please fill the required details" })
    }
    try{
        const player = new Player({team_name,captain,contact,payment,player_name})

        const playerRegister = await player.save()
        if (playerRegister) {
            res.status(201).json({ message: "Team registraion sucessfully" });
        }
        else {
            res.status(500).json({ error: "Sorry not registerd, Try again" })
        }
    }
    catch(err){
        console.log(err);
    }

})

module.exports = router;