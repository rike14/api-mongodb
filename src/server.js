const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

db.connect()

const app = express()

app.use(express.urlencoded({extended: true}))

app.use('/api', routes)

const port = process.env.PORT || 5500
app.listen(port , () => console.log(`Server is listening on port ${port}`))


