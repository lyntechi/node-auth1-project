const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
router.post("/register", (req, res) => {
  const userInfo = req.body;
  const isValid = validateUser(userInfo);

  if (isValid) {
    Users.add(userInfo).then((inserted) => {
      res.status(201).json({ data: inserted });
    });
  } else {
    res
      .status(400)
      .json({ message: "invalid information, please verify and try again" });
  }
});
function validateUser(user) {
  return user.username && user.password ? true : false;
}
router.post("/login", (req, res) => {});
