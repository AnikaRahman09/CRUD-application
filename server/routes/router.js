const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');
// router.get("/", (req, res)=> {
//     console.log("connect");
// })

// Register user
router.post("/register", async(req, res)=> {
    // console.log(req.body);
    const {name, email, age, mobile, work, address, description} = req.body;

    if(!name || !email || !age || !mobile || !work || !address || !description){
        res.status(422).json("please fill up the data");
    }

    try {
        
        const preuser = await users.findOne({email:email});   //findOne()- mongodb method
        console.log(preuser);

        if(preuser){
            res.status(422).json("This user is already registered. Email already in use.");
        }else {
            const adduser = new users({
                name, email, age, mobile, work, address, description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})


// get user data
router.get("/getdata", async(req, res) => {
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})


// get individual user
router.get("/getuser/:id", async(req, res) => {
    try {
        console.log(req.params.id);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        
        res.status(201).json(userindividual);
    }catch (error) {
        res.status(422).json(error);
    }
})


// update user data
router.patch("/updateuser/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new:true
        });

        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;