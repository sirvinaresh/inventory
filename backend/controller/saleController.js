// controllers/saleController.js
const Sale = require("../model/saleModel");
const Book = require("../model/bookModel");

exports.recordSale = async (req, res) => {
  try {
    const { book_id, quantity, payment_method, customer_name, sale_date } =
      req.body;

    const book = await Book.findById(book_id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    if (book.stock < quantity) {
      return res.status(400).json({ error: "Not enough stock available" });
    }

    const total_amount = quantity * book.price;
    // Record sale
    const sale = await Sale.create({
      book_id,
      quantity,
      payment_method,
      customer_name,
      sale_date,
      total_amount
    });

    // Update stock
    book.stock -= quantity;
    await book.save();

    res.status(201).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("book_id", "title") // only get book title
.sort({ sale_date: -1 });
    res.status(200).json(sales);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
