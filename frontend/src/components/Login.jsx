import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Navigate } from 'react-router-dom';

function Login() {

    
  return (
    <>
        <Container className=''>
            <Row className=''>
                <Col lg={4} md={6} sm={12} className='rounded-5 p-4 m-auto shadow'>
                    <h4 className='text-center'>LOGIN ADMIN</h4>
                    <form className='py-5'>
                      

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                      </div>

                      <div className="mb-3 text-center">
                        <Link to='/register'>don't have an account?</Link>
                      </div>

                      <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                </Col>
            </Row>
       </Container>
    </>
  )
}

export default Login