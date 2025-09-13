import React, { useEffect, useState } from 'react'
import { Card, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddBook() {

    const navi = useNavigate();
    const [formData, setFormData] = useState({
        _id:"",
        title: "",
        author: "",
        genre: "",
        price: "",
        stock: "",
    });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData._id){
      await axios.post(`http://localhost:8080/update/${formData._id}`,formData)
      .then((response)=>console.log(response))
      .catch((error)=>console.log(error))
      setFormData({_id:'', title: "", author: "", genre: "", price: "", stock: "" });
      sessionStorage.removeItem('bookedit');
      navi('/');
    }else{
      await axios.post('http://localhost:8080/',formData)
      .then((response)=>console.log(response))
      .catch((error)=>console.log(error))
      setFormData({_id:'', title: "", author: "", genre: "", price: "", stock: "" });
    }
  };
  
  useEffect(()=>{
    const book = JSON.parse(sessionStorage.getItem('bookedit'));
    if(book){
      setFormData({
        _id:book._id,
        title:book.title,
        author:book.author,
        genre:book.genre,
        price:book.price,
        stock:book.stock
      })
    }
  },[])
  return (
    <>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <div className="container">
        <Card className="shadow-sm">
          <Card.Header><h3>Add New Book</h3></Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              {/* Book Title */}
              <Row className="mb-3">
                <Col md={12}>
                  <Form.Label htmlFor="bookTitle">Book Title</Form.Label>
                  <Form.Control type="text" name="title" id="bookTitle" placeholder="e.g., The Midnight Library" value={formData.title} onChange={handleChange} />
                </Col>
              </Row>

              {/* Author & Genre */}
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label htmlFor="author">Author</Form.Label>
                  <Form.Control type="text" name="author" id="author" placeholder="e.g., Matt Haig" value={formData.author} onChange={handleChange} />
                </Col>
                <Col md={6}>
                  <Form.Label htmlFor="genre">Genre</Form.Label>
                  <Form.Select name="genre" id="genre" value={formData.genre} onChange={handleChange}>
                    <option value="">Choose a genre...</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Sci-Fi">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Price & Stock */}
              <Row className="mb-4">
                <Col md={4}>
                  <Form.Label htmlFor="price">Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control type="number" name="price" id="price" placeholder="999.00" step="0.01" value={formData.price} onChange={handleChange} />
                  </InputGroup>
                </Col>
                <Col md={4}>
                  <Form.Label htmlFor="stockQuantity">Stock Quantity</Form.Label>
                  <Form.Control type="number" name="stock" id="stockQuantity" placeholder="e.g., 50" value={formData.stock} onChange={handleChange} />
                </Col>
              </Row>

              {/* Submit Button */}
              <Button type="submit" variant="primary" className="w-25">Add Book</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </main>
    </>
  )
}

export default AddBook