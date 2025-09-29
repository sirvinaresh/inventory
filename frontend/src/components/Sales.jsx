import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
function Sales() {

  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    book_id: "",
    quantity: "",
    payment_method: "Cash",
    customer_name: "",
    sale_date: new Date().toISOString().split("T")[0], 
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch books from backend
  useEffect(() => {
    axios.get("http://localhost:8080") // change to your API endpoint
      .then((res) => {setBooks(res.data.filter((book) => book.stock > 0));})
      .catch((err) => console.error(err));
  },[]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/sale/recoardsales", formData)
      .then((res) => {setSuccess("Sale recorded successfully!");
        setError("");
        setFormData({
          book_id: "",
          quantity: "",
          payment_method: "Cash",
          customer_name: "",
          sale_date: new Date().toISOString().split("T")[0],
        });
      })
      .catch((err) => {setError("Error recording sale. Please try again.");
      setSuccess("");
      });
  };
  return (
    <>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <div className="container mt-4">
        <Card className="shadow-sm">
          <Card.Header>
            <h3>Record a Sale</h3>
          </Card.Header>

          <Card.Body>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <Form onSubmit={handleSubmit}>
              {/* Book Dropdown */}
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Label htmlFor="book_id">Book</Form.Label>
                  <Form.Select
                    name="book_id"
                    id="book_id"
                    value={formData.book_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select a Book --</option>
                    {books.map((book) => (
                      <option key={book._id} value={book._id}>
                        {book.title}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>

              {/* Quantity & Payment Method */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label htmlFor="quantity">Quantity Sold</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    id="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="payment_method">
                    Payment Method
                  </Form.Label>
                  <Form.Select
                    name="payment_method"
                    id="payment_method"
                    value={formData.payment_method}
                    onChange={handleChange}
                    required
                  >
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Customer Name & Date */}
              <Row className="mb-3">
                <Col md={8}>
                  <Form.Label htmlFor="customer_name">
                    Customer Name (optional)
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="customer_name"
                    id="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                  />
                </Col>
                <Col md={4}>
                  <Form.Label htmlFor="sale_date">Date of Sale</Form.Label>
                  <Form.Control
                    type="date"
                    name="sale_date"
                    id="sale_date"
                    value={formData.sale_date}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>

              {/* Submit */}
              <Button type="submit" variant="successw" className="">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </main>
    </>
  )
}

export default Sales