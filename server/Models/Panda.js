const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: String, required: true },
  panda: {
    bg: Number,
    ear: Number,
    eye: Number,
    face: Number,
    otl: Number,
    mouth: Number,
  },
});

module.exports = mongoose.model('Panda', schema);
