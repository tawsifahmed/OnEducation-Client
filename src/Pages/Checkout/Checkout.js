import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Checkout = () => {
    const courseCheck = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-center text-decoration-underline mb-4 text-muted'>Checkout Section</h1>
            <Container>
                <Row>
                    <Col lg='7'>
                        <Container className='text-center d-flex justify-content-center'>
                            <Card style={{ width: '35rem' }}>
                                <Card.Img variant="top" src={courseCheck.image_url} />
                                <Card.Body>
                                    <Card.Title>{courseCheck.title}</Card.Title>
                                    <Card.Text>
                                        {courseCheck.details}
                                    </Card.Text>
                                    <h5>Price: ${courseCheck.price}</h5>
                                    <Button variant="primary">Purchase now</Button>
                                </Card.Body>
                            </Card>
                        </Container>
                    </Col>
                    <Col lg='4'>
                        <h3>Buyer Information</h3>
                        <div className='border m-1 p-3 rounded'>
                            <Form.Group className="mb-3">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control placeholder="Disabled input" value={user.displayName} disabled />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>User Email</Form.Label>
                                <Form.Control placeholder="Disabled input" value={user.email} disabled />
                            </Form.Group>
                            <Button variant="primary">Get Discount</Button>
                        </div>
                    </Col>
                </Row>
            </Container>




        </div>
    );
};

export default Checkout;