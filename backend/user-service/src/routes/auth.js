const AuthService = require("../service/AuthService");

const router = require("express").Router();

router.post("/login", async (req, res) => {
  try {
    const authService = new AuthService();
    const token = await authService.signIn(req.body.email, req.body.password);
    res.status(200).json({
      message: "logged in successfully",
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/sign-up", async (req, res) => {
  try {
    const { name, username, email, password, roles } = req.body;
    const authService = new AuthService();
    const result = await authService.signUp(
      name,
      username,
      email,
      password,
      roles
    );
    res.status(201).json({
      message: "User Created Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = {
  AuthRouter: router,
};
