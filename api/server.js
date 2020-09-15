const express = require("express");
const server = express();
const welcomeRouter = require('../welcome/welcome-router')

server.use(express.json());
server.use("/", welcomeRouter);

module.exports = server;