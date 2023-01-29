const express = require('express');
const router = express.Router();
let users = require("../models/userSchema");

// register Vendor
router.post('/register', (req, res) => {
    console.log(req.body)

    // res.json('Registerd')
    const addUser = new users({
        vendorName: req.body.vendorName,
        vendorDescription: req.body.vendorDescription,
        vendorPoints: req.body.vendorPoints,
    });

    addUser
        .save()
        .then(() => res.json("new vendor added"))
        .catch((err) => res.status(400).json(`Error: ${err}`));

});

//get user database
router.get("/getdata", async (req, res) => {

    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch (error) {
        res.status(422).json(error)
    }
})

//get individual user information
router.get('/getuser/:id', async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;

        const userIndividual = await users.findById({ _id: id });
        console.log(userIndividual);
        res.status(201).json(userIndividual);

    } catch (error) {
        res.status(422).json(error.message);
    }
})


//update 
router.patch('/updateuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateUser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateUser);
        res.status(201).json(updateUser);


    } catch (error) {
        res.status(422).json(error);
    }
})

//delete
router.delete('/deleteuser/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await users.findByIdAndDelete({ _id: id });
        console.log(deleteUser);
        res.status(201).json(deleteUser);


    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;