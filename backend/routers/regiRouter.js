const express = require("express");
const Router = express.Router();
const regi = require("../controller/regiController");

Router.post("/", regi.createRegi);
module.exports = Router;
