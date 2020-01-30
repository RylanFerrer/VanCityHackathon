const express = require('express')
const cors = require('cors')
const app = express()
const data = require('./Models/dataset.json')
const PORT = process.env.PORT || 5000
app.get('/', (req,res) => {
    res.send("VanCity Hack")
    let cat = {
        Shopping: 0,
        Groceries: 0,
        HealthFitness: 0,
        Travel: 0,
        FoodDrink: 0,
        Utilities: 0
    }
    let vals =  Object.values(data.Category)
    for(let i = 0; i < 30; i++)
    {
        if(cat[vals[i]] !== undefined)
        {
            cat[vals[i]] += data.Amount[i]
        } else if (vals[i] === 'Food & Drink') {
            cat.FoodDrink += data.Amount[i]
        } else if (vals[i] === 'Health & Fitnes') {
            cat.HealthFitness += data.Amount[i]
        }
    }
    console.log(cat)

})
app.use('/api/user', require('./Routes/Api/users'))
app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})
