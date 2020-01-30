const express = require('express');
const router = express.Router()
let user = require('../../Models/User')

router.get(`/`, (req,res) => {
    
    res.send(user)
})
router.post('/', (req,res) => {
    user = {...user,hasPortfolio:true }
    return  res.sendStatus(200)
})
module.exports = router