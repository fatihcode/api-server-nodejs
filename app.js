const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 9000

const db = require('./config/db')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', require('./routes/userRoutes'))


app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))