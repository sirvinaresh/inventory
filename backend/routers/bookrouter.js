const express = require("express");
const router = express.Router();
const books = require("../controller/bookController");

router.post("/", books.createBook);
router.get("/", books.getBook);
router.post("/update/:id", books.updateBook);
router.delete("/delete/:id", books.deleteBook);

module.exports = router;
