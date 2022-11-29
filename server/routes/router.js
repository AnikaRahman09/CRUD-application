const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');
// router.get("/", (req, res)=> {
//     console.log("connect");
// })

router.post("/register", async(req, res)=> {
    // console.log(req.body);
    const {name, email, age, mobile, work, address, description} = req.body;

    if(!name || !email || !age || !mobile || !work || !address || !description){
        res.status(404).send("please fill up the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});   //findOne()- mongodb method
        console.log(preuser);

        if(preuser){
            res.status(404).send("This user is already registered. Email already in use.");
        }else {
            const adduser = new users({
                name, email, age, mobile, work, address, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;