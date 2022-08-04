const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  donorId: {
    type: String,
    required: true,
    unique:true,
  },
  name: {
    firstName: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 20,
    },

    lastName: {
      type: String,
      trim: true,
      minLength: 2,
      maxLength: 20,
  
    },
  },
  bloodGroup: {
    type: String,
    required: true,
    uppercase: true,
  },
  
    rhesusFactor: { 
      type: String},

  donorAddress: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('User', userSchema);
