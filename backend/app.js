const express = require("express");
var app = express();
const connectDB = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());
connectDB();

const bookRouter = require("./routers/bookrouter");
const sale = require("./routers/salerouter");

app.use("/", bookRouter);
app.use("/sale", sale);

app.listen(8080, () => {
  console.log("Server listening on 8080 port");
});
