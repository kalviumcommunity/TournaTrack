const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

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

module.exports = router;