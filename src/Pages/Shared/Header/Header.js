import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup, Image, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaToggleOff, FaGoogle, FaGithub, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';




const Header = () => {
    const { user, providerLogin, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }
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
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span>                                {user?.displayName}
                                            </span>
                                            <Button variant="link" onClick={handleLogOut}>Logout</Button>

                                        </>
                                        :
                                        <>
                                            <Link className='me-2' to='/login'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }

                            </Nav.Link>
                            <Nav.Link>
                                {user?.photoURL ?
                                    <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}>

                                    </Image>
                                    : <FaUser></FaUser>
                                }
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
                                <Button onClick={handleGoogleSignIn} className='me-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Log in</Button>
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