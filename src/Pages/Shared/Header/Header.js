import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaToggleOff, FaGoogle, FaGithub } from "react-icons/fa";



const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">On<span className='text-primary'>Education</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/courses">Courses</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>Theme: Light</Nav.Link>
                            <Nav.Link>
                                <FaToggleOff className='mb-1'></FaToggleOff> |
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand className='d-none' href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonGroup>
                                <Button className='me-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Log in</Button>
                                <Button variant="outline-dark rounded"><FaGithub></FaGithub> Log in</Button>
                            </ButtonGroup>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;