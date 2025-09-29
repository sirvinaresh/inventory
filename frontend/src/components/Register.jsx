import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [formdata,setformdata] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
      e.preventDefault();

      axios.post('http://localhost:8080/register/',formdata)
      console.log(formdata)
      setformdata({
        name:'',
        email:'',
        password:''
      })
  }
  return (
    <>
       <Container className=''>
            <Row className=''>
                <Col lg={4} md={6} sm={12} className='rounded-5 p-4 m-auto shadow'>
                    <h4 className='text-center'>CREATE NEW ACOUNT</h4>
                    <form className='py-5' onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={formdata.name} id="name1" aria-describedby="emailHelp" onChange={handleChange} />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' value={formdata.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={formdata.password} id="exampleInputPassword1" onChange={handleChange}/>
                      </div>

                      <div className="mb-3 text-center">
                        <Link to='/login'>Already have an account? Sign in</Link>
                      </div>

                      <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Col>
            </Row>
       </Container>
    </>
  )
}

export default Register