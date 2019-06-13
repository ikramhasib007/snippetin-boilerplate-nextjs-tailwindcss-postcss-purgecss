const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
    }
  },
  username: { type: String, required: true, trim: true, minlength: 6 },
  password: { type: String, required: true, minlength: 6 },
  terms_condition: { type: Boolean, required: true },
  bio: { type: String },
  dob: { type: Date },
  employment: [
    {
      occupation: { type: String },
      company: { type: String },
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zipcode: { type: String },
      join: { type: Date },
      resign: { type: Date },
      status: { type: String, default: 'current' }
    }
  ],
  address: {
    phone: { type: String },
    mobile: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipcode: { type: String }
  },
  social: [
    {
      url: { type: String },
      title: { type: String },
      username: { type: String }
    }
  ],
  isDeleted: { type: Boolean, default: false }
}, {
  timestamps: true
});

userSchema.pre('save', function(next) {
  var user = this;
  if(user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };