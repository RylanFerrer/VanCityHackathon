const express = require('express');
const router = express.Router()
const user = require('../../Models/User')

router.get(`/`, (req,res) => {
    console.log('jelllo')
    res.send(user)
})

module.exports = router