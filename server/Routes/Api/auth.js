const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken')
const secret ="thisismysecretn";
const withAuth = require('../../Helpers/helpers')
router.get('/checkToken', withAuth, (req,res) => {
    res.sendStatus(200)
})
router.post("/", (req,res) => {
        const {user, password} = req.body
                if(user !== "sam" && password !== '123') {
                    res.sendStatus(400)
                 } else {
                     const payload = {user};
                     const token = jwt.sign(payload, secret, {
                         expiresIn: '1h' 
                     });
                     res.cookie('token',token,{httpOnly:true}).sendStatus(200);
                 }
});
 
 module.exports = router
module.exports = router