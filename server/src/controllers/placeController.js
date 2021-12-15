const express = require("express")

const Place = require("../models/places.model")

const router = express.Router()

//post request

router.post("", async(req, res) => {

    const place = await Place.create(req.body)

    return res.status(201).send({place})
})

//get request

router.get("", async(req, res) => {

    const place = await Place.find().lean().exec()

    return res.status(200).send({place})
})


module.exports = router

