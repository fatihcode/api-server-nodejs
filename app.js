const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config();


const db = require('./config/db')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.header('access-control-allow-origin', 'https://fatihqaz.github.io/');
   next();
   });

app.use('/users', require('./routes/userRoutes'))


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))