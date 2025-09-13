import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
        <header>
            <Navbar expand="lg" fixed="top" className="py-1" style={{ backgroundColor: '#1e293b' }}>
                <Container>
                <img src={require('../images/logo.png')} alt="Logo" style={{ height: '55px' }} />

                <Navbar.Toggle aria-controls="navbarNav" className="text-light" />

                <Navbar.Collapse id="navbarNav" className="justify-content-end">
                    <Nav>
                    <Nav.Link href="#" className="text-light">
                        Profile
                    </Nav.Link>
                    <Nav.Link href="#" className="text-light">
                        Settings
                    </Nav.Link>
                    <Nav.Link href="#" className="text-light">
                        Logout
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

        <div className="container-fluid">
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block sidebar">
                <div className="position-sticky">
                    <Nav className="flex-column mt-4">
                    <Nav.Item>
                        <NavLink to='/' className="side nav-link">
                        <i className="bi bi-speedometer2"></i>{" "}
                        <span className="d-none d-md-inline">Dashboard</span>
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink to='addbook' className="side nav-link">
                        <i className="bi bi-book"></i>{" "}
                        <span className="d-none d-md-inline">Add Books</span>
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink to='sales' className="side nav-link">
                        <i className="bi bi-cart"></i>{" "}
                        <span className="d-none d-md-inline">Sales</span>
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink to='transaction' className="side nav-link">
                        <i className="bi bi-receipt"></i>{" "}
                        <span className="d-none d-md-inline">Transaction</span>
                        </NavLink>
                    </Nav.Item>

                    <Nav.Item>
                        <NavLink to='users' className="side nav-link">
                        <i className="bi bi-people"></i>{" "}
                        <span className="d-none d-md-inline">Users</span>
                        </NavLink>
                    </Nav.Item>
                    </Nav>
                </div>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Header