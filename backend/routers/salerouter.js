const express = require("express");
const router = express.Router();
const { recordSale,getSales } = require("../controller/saleController");

router.post("/recoardsales", recordSale);
router.get("/getsales", getSales);


module.exports = router;
