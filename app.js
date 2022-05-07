const express = require('express')
const app = express()
const db = require('./config/db')()
require('dotenv').config();

const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(cors())

const whitelist = [
   'https://fatihcode.github.io',
   'http://localhost:3000'
]

const corsOptions = {
   origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
         callback(null, true)
      } else {
         callback(new Error('Not allowed by CORS'))
      }
   }
}


app.use('/', require('./routes/userRoutes'))


app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))