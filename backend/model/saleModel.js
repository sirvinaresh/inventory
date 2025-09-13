// models/saleModel.js
const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  payment_method: {
    type: String,
    enum: ["Cash", "Card", "UPI", "Other"],
    required: true,
  },
  customer_name: {
    type: String,
  },
  sale_date: {
    type: Date,
    default: Date.now,
  },
  total_amount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Sale", saleSchema);
