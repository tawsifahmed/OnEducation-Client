import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, ButtonGroup, Image, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaToggleOff, FaGoogle, FaGithub, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';





const Header = () => {
    const { user, providerLogin, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className='fs-2' as={Link} to="/">On<span className='text-primary'>Education</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto pt-2">
                            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link>FAQ</Nav.Link>

                        </Nav>
                        <Nav className=''>
                            <Nav.Link>Theme: Light</Nav.Link>
                            <Nav.Link>
                                <FaToggleOff></FaToggleOff> |
                            </Nav.Link>
                            <Nav.Link>
                                {
                                    user?.uid ?
                                        <>
                                            <span>                                {isHovering && <p className='fs-6 d-inline'>{user?.displayName}</p>}
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
                                <div>
                                    <div>
                                        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                            {user?.photoURL ?
                                                <Image style={{ height: '40px' }} roundedCircle src={user?.photoURL}>

                                                </Image>
                                                : <FaUser></FaUser>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar>
                <Container>
                    <Navbar.Brand className='d-none'>Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonGroup>
                                {user?.email ?
                                    <>
                                        <div className='d-none'>
                                            <h2>ss</h2>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Button onClick={handleGoogleSignIn} className='me-2 rounded' variant="outline-primary"><FaGoogle></FaGoogle> Log in</Button>

                                        <Button onClick={handleGithubSignIn} variant="outline-dark rounded"><FaGithub></FaGithub> Log in</Button>
                                    </>
                                }
                            </ButtonGroup>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;