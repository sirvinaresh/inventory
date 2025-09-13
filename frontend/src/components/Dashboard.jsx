import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Table, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  
  const navi = useNavigate();
  const [book,setbooks] = useState([]);
  const fetchdata = () =>{
    axios.get('http://localhost:8080/')
        .then((response)=>setbooks(response.data))
  }
  useEffect(()=>{
      fetchdata();
  },[])

  const deleteBook = (del) =>{
      axios.delete(`http://localhost:8080/delete/${del}`)
      .then(()=>{fetchdata()})
  }

  const totalBooks = book.length;
  const totalStock = book.reduce((sum, currentBook) => sum + currentBook.stock, 0);
  const availableBooks = book.filter(b => b.stock > 0).length;
  const outOfStock = book.filter(b => b.stock === 0).length;

  return (
    <>
   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 main-content">
      <div className="container">
        {/* Stats Cards */}
        <Row className="my-4">
          <Col lg={3} md={6} sm={12} className="mb-3 mb-lg-0">
            <Card className="box shadow">
              <Card.Body>
                <Card.Title>Total Books</Card.Title>
                <h1>{totalBooks}</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-3 mb-lg-0">
            <Card className="box shadow">
              <Card.Body>
                <Card.Title>Total Stock</Card.Title>
                <h1>{totalStock}</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-3 mb-lg-0">
            <Card className="box shadow">
              <Card.Body>
                <Card.Title>Available Books</Card.Title>
                <h1>{availableBooks}</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <Card className="box shadow">
              <Card.Body>
                <Card.Title>Out of Stock</Card.Title>
                <h1>{outOfStock}</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <hr className="my-5" />

      {/* Books Table */}
      <div className="overflow-auto">
        <h3 className="mb-3">Book Inventory List 📖</h3>
        <Table striped hover bordered className="text-center">
          <thead className="table-dark">
            <tr>
              <th>SR No.</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                book.map((val,i)=>{
                  return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{val.title}</td>
                      <td>{val.author}</td>
                      <td>{val.genre}</td>
                      <td>₹{val.price.toLocaleString('en-IN')}</td>
                      <td>{val.stock}</td>
                      <td className={val.stock > 5 ? 'text-success fw-bold' : val.stock > 0 ? 'text-warning fw-bold' : 'text-danger fw-bold'}>
                        {val.stock > 5 ? 'Available' : val.stock > 0 ? 'Low Stock' : 'Out of stock'}
                      </td>
                      <td class="text-center d-flex justify-content-evenly">
                            <button className='btn btn-warning' onClick={()=>{sessionStorage.setItem('bookedit',JSON.stringify(val)); navi('/addbook')}}><i className="bi bi-pencil-fill"></i></button>
                            <button className='btn btn-danger' onClick={()=>{deleteBook(val._id);}}><i className="bi bi-trash-fill"></i></button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </Table>
      </div>
    </main>
    </>
  )
}

export default Dashboard