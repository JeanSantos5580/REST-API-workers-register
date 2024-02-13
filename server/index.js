const express = require("express")
const cors = require('cors')
const db = require('./models')

const app = express()
const PORT = 3000

const usersRouter = require('./routes/Users')
const addressRouter = require('./routes/Address')

app.use(cors())
app.use(express.json())

app.use("/users", usersRouter)
app.use("/adress", addressRouter)

db.sequelize
    .sync()
    //.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Express]: Server running on port ${PORT}`);
        })
    })