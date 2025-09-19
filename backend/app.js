const express = require("express");
var app = express();
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
connectDB();

const bookRouter = require("./routers/bookrouter");
const sale = require("./routers/salerouter");
const regi = require("./routers/regiRouter");
app.use("/", bookRouter);
app.use("/sale", sale);
app.use('/register',regi)

app.listen(8080, () => {
  console.log("Server listening on 8080 port");
});
