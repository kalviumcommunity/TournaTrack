const jwt = require('jsonwebtoken')
const express = require('express');
const crypto = require('crypto')
const router = express.Router();
const bcrypt = require('bcryptjs')
const Tournament = require('../models/tournamentData')
const Player = require('../models/playerData')
const{OAuth2Client}=require('google-auth-library')
const Razorpay = require('razorpay')
require('../database/connection');
const nodemailer = require('nodemailer')
const sendgridtransport = require("nodemailer-sendgrid-transport")
const User = require('../models/userSchema');
const Payment = require('../models/paymentScehma')
const ID = process.env.ID
router.get('/signin', (req, res) => {
    res.send(`hello login world from server but router`);
});
// nodemailer
  const transporter = nodemailer.createTransport(
    sendgridtransport({
        auth:{
            api_key:process.env.NODEMAILER
        }
    })
  )
//sigup
router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email  || !password || !cpassword) {
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
                transporter.sendMail({
                    to:email,
                    from:"tournatrack.platform@gmail.com",
                    subject:"Welcome to TournaTrack",
                    html:`Hi ${name}, welcome to tournaTrack. We are very excited to serve you.
                    `
                })
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

        if (userLogin.password) {
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
                const token = jwt.sign({
                    email:userLogin.email,
                    name:userLogin.name,
                    _id:userLogin._id
                },process.env.SECRET_KEY)
                res.json({ message: "user signin successfully" })
            }
        }
        if(userLogin.withgoogle){
            const token = jwt.sign({
                email:userLogin.email,
                name:userLogin.name,
                _id:userLogin._id
            },process.env.SECRET_KEY)
            res.json({ message: "user signin successfully" })
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
//reset password
router.post('/reset',async(req,res)=>{
   const {email} =req.body;
   userfind= await User.findOne({email})
   if(!userfind){
    return res.status(404).json({error:"User doesn't exist with this email"})
   }
   const token = jwt.sign({_id:userfind._id},process.env.SECRET_KEY,{
    expiresIn:"1000s"
   })
   const{_id,name} = userfind;
   const setUserToken= await User.findByIdAndUpdate(
    {_id:_id},
    {resettoken:token},
    {new:true}
   )
    if(setUserToken){
        transporter.sendMail({
            to:userfind.email,
            from:"tournatrack.platform@gmail.com",
            subject:"Reset Password",
            html:`You requested to reset password
            <h3>Click <a href="${process.env.LOCALHOST}/newpassword/${userfind._id}/${token}">here</a> to reset your password</h3>

            `
        })
        res.status(200).json({
            message: "password reset link has been send to your register email"
        })
    }
})
//new password
router.post('/newpassword/:id/:token', async(req,res)=>{
    const {id,token} = req.params
    const {password, cpassword} = req.body
    const validuser = await User.findOne({_id:id,resettoken:token})
    if(validuser){
        const newPassword = await bcrypt.hash(password,12)
        const newCPassword = await bcrypt.hash(cpassword,12)
        const setNewPassword = await User.findByIdAndUpdate(
            {_id:id},
            {password:newPassword,cpassword: newCPassword}
        );
        setNewPassword.save();
        res.status(201).json({message: "password updated sucessfully"})      
    }
    else{
        res.json({error: "Link has been expired"})
    }

})

// signin with google
    const client = new OAuth2Client(ID)
    router.post("/token", async (req,res) =>{
        const {tokenid} = req.body;

        const user = await client.verifyIdToken({
            idToken:tokenid,
            audience:ID
        });
        const payload = user.getPayload();
        const email = payload.email;
        const check = await User.findOne({email:email});
        if(!check){
            const name = payload.name
            const email= payload.email
            const userdata = new User()
            userdata.name =name;
            userdata.email=email;
            userdata.withgoogle=true;

            userdata.save(async (err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    const token = jwt.sign({
                        email:data.email,
                        name:data.name,
                        _id: data._id,
                    },process.env.SECRET_KEY);
                    res.json({status:"Signin successful", user:token});
                }
            })
        }
       else{
        const token = jwt.sign({
            email:check.email,
            name:check.name,
            _id: check._id,
        },process.env.SECRET_KEY);
        res.json({status:"Signin successful", user:token});
       }
        
    })
    //payment 
    const instance = new Razorpay({
        key_id: process.env.RAZORPAY_SECREAT_KEY,
        key_secret: process.env.RAZORPAY_KEY_ID,
      });
      
     router.post('/checkout',async(req,res)=>{
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
          };
          const order = await instance.orders.create(options);
        
          res.status(200).json({
            success: true,
            order,
          });
     })
      // paymentverification
      router.post('/paymentverification', async(req,res)=>{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECREAT_KEY)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
    //   `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
      })
module.exports = router;