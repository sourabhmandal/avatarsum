const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: String, required: true },
  pallete: { type: [String], require: true },
});

module.exports = mongoose.model('Pallete', schema);
