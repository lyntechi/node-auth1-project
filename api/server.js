const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const server = express();
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.get("/", (req, res) => {
  const password = req.headers.password;
  const rounds = process.env.BCRYPT_ROUNDS || 4;
  const hash = bcrypt.hashSync(password, rounds);
  res.json({ api: "up", password, hash });
});
module.exports = server;
