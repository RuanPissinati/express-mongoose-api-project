const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true 
  },
  password: {
    type: String,
    required: true,
  },
  createdAtUser: {
    type: Date,
    default: Date.now
  }
}, {
  // timestamps: true
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToken() {
    return jwt.sign(
      { id: this.id }, 
      "secret", 
      { expiresIn: 86400 }
    );
  }
};

module.exports = mongoose.model("User", UserSchema);


// "name": "ruan",
// "email": "ruan@mail.com",
// "password": 1234