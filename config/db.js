const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {

   const connectionURL = `mongodb+srv://${process.env.USER_PASS}@cluster0.luqhn.mongodb.net/usersdb`

   mongoose.connect(connectionURL, { useNewUrlParser: true })

   mongoose.connection.on('open', () => {
      console.log('Mongoose connected to MongoDB');
   });

   mongoose.connection.on('error', (err) => {
      console.log('MongoDB Connect Failed. Error :', err);
   });
}