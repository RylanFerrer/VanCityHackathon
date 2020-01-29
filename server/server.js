const express = require('express')
const app = express()
const PORT = procss.env.PORT

app.get('/', (req,res) => {
    res.send("VanCity Hack")
})
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})
