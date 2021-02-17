const User = require('../models/User');
const bcrypt = require('bcrypt');

const register = (username, password) => {
  let user = new User({ username, password });
  return user.save();
}
const login = async (username, password) => {
  let user = await User.findOne({ username })

  if (!user) {
    throw { message: 'Invalid user', status: 404 };
  }
  let isCorrect = await bcrypt.compare(password, user.password)
  if (!isCorrect) {
    throw { message: 'Invalid password', status: 404 };
  }
  return user;
};

module.exports = {
  register,
  login,
}