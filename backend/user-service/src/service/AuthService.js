const UserRepository = require("../repository/UserRepository");
const { ValidatePassword, GenerateSignature } = require("../utils/jwtUtils");
class AuthService {
  constructor() {
    this.userRepo = new UserRepository();
  }

  async signIn(email, password) {
    const user = await this.userRepo.FindUser(email);
    if (!user) {
      throw new Error("No user found with this EMAIL");
    }
    const isCredsValid = await ValidatePassword(
      password,
      user.password,
      user.salt
    );
    if (isCredsValid) {
      const token = await GenerateSignature({ email, roles: user.roles });
      return token;
    }
    throw new Error("Wrong Password");
  }

  async signUp(name, username, email, password, roles) {
    const newUser = await this.userRepo.CreateUser(
      name,
      username,
      email,
      password,
      roles
    );
    return newUser;
  }
}

module.exports = AuthService;
