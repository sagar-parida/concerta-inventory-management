const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const GenerateSalt = async () => {
  return await brcypt.genSalt();
};

const GeneratePassword = async (password, salt) => {
  return await brcypt.hash(password, salt);
};

const ValidatePassword = async (enteredPassword, savedPassword, salt) => {
  console.log(enteredPassword, savedPassword, salt);
  const saltedPassword = await GeneratePassword(enteredPassword, salt);
  return saltedPassword === savedPassword;
};

const GenerateSignature = async (userData) => {
  try {
    return await jwt.sign(userData, process.env.APP_SECRET, {
      expiresIn: "30m",
    });
  } catch (error) {
    return error;
  }
};

const ValidateSignature = async (token) => {
  try {
    const payload = await jwt.verify(token, process.env.APP_SECRET);
    return payload;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  GenerateSalt,
  GeneratePassword,
  ValidatePassword,
  GenerateSignature,
  ValidateSignature,
};
