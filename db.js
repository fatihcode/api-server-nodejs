const mongoose = require('mongoose');

module.exports = () => {

   const connectionURL = "mongodb://localhost:27017/usersdb"

   mongoose.connect(connectionURL, { useNewUrlParser: true })

   mongoose.connection.on('open', () => {
      console.log('Mongoose connected to MongoDB');
   });

   mongoose.connection.on('error', (err) => {
      console.log('MongoDB Connect Failed. Error :', err);
   });


}