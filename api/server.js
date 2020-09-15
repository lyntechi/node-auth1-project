const express = require("express");
const server = express();
const welcomeRouter = require("../welcome/welcome-router");
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

server.use(express.json());
server.use("/", welcomeRouter);
server.use("/auth", authRouter);
server.use("/api/users", usersRouter);

module.exports = server;
