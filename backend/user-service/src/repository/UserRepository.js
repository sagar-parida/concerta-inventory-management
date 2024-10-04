const User = require("../model/User");
const { GenerateSalt, GeneratePassword } = require("../utils/jwtUtils");

class UserRepository {
  async CreateUser(name, username, email, password, roles) {
    const salt = await GenerateSalt();
    const saltedPassword = await GeneratePassword(password, salt);
    const newUser = new User({
      name,
      username,
      email,
      password: saltedPassword,
      roles,
      salt,
    });
    const result = await newUser.save();
    return result;
  }

  async FindUser(email) {
    const results = await User.findOne({ email: email });
    return results;
  }

  async DeleteUser(email) {
    const result = await User.deleteOne({ email: email });
    return result;
  }

  async UpdateUser({ name, username }) {
    const user = await User.findOne({ email: email });
    user.name = name;
    user.username = username;
  }

  async FindAllUsers() {
    return await User.find();
  }
}

module.exports = UserRepository;
