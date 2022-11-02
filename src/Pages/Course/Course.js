import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePowerpoint } from "react-icons/fa";
import Printer, { print } from 'react-pdf-print'


const ids = ['1']


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
                            <h2 className='text-center text-muted text-decoration-underline mb-5 pe-3 me-2'>Course Detail</h2>
                            <h2 onClick={() => print(ids)} className='mb-5'><Button><FaFilePowerpoint></FaFilePowerpoint></Button></h2>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Printer>
                                <Card id={ids[0]} style={{ width: '28rem' }}>
                                    <Card.Img variant="top" src={course.image_url} />
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text>
                                            {course.details}
                                        </Card.Text>
                                        <div className='text-center'>

                                            <Link course={course} to={`/checkout/${course.course_id}`}>
                                                <Button variant="primary">Get Premium Access</Button>
                                            </Link>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Printer>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;