const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
app.get('/', (req,res) => {
    res.send("VanCity Hack")
})
app.use('/api/user', require('./Routes/Api/users'))
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})
