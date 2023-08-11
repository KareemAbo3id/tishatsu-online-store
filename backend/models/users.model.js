import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// 👉 MAIN MONGOOSE USER SCHEMA (INITIAL KEYS):
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// encrypt password:
userSchema.pre('save', async function (next) {
  // check if password was modified:
  if (!this.isModified('password')) next();

  // if not, choose a salt method to hash the password:
  const salt = await bcrypt.genSalt(10);

  // hash the password:
  this.password = await bcrypt.hash(this.password, salt);
});

// compare password:
userSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

// 👉 USER MODEL THAT CONTAINS USER SCHEMA:
const UserModel = mongoose.model('users', userSchema);

export default UserModel;
