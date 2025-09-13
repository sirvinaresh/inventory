const books = require("../model/bookModel");

exports.createBook = async (req, res) => {
  try {
    var data = await books.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBook = async (req, res) => {
  try {
    var data = await books.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    var data = await books.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    var data = await books.findByIdAndDelete(req.params.id,req.body);
    res.status(200).json({
        massage:'Delete Recoard'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

