import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePowerpoint } from "react-icons/fa";


const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <div className='d-flex justify-content-center align-self-center'>
                            <h2 className='text-center mb-5 pe-3 me-2'>Course Detail</h2>
                            <h1 className='mb-5'><Button><FaFilePowerpoint></FaFilePowerpoint></Button></h1>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Card style={{ width: '28rem' }}>
                                <Card.Img variant="top" src={course.image_url} />
                                <Card.Body>
                                    <Card.Title>{course.title}</Card.Title>
                                    <Card.Text>
                                        {course.details}
                                    </Card.Text>
                                    <div className='text-center'><Button variant="primary">Get Premium Access</Button></div>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;