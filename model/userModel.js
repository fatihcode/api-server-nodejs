const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {
      type: String,
      maxlength: [200, "The field `{PATH}` must be less than 200 characters!"],
      minlength: [3, "The field `{PATH}` must be more than 3 characters!"],
      required: true,
   },
   email: { type: String },
   address: { type: String },
   phone: { type: String, required: true },
   website: { type: String },
   company: { type: String },
   created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('candidate', userSchema)